# Architecture Overview: AEX PDF Management System

## Design Philosophy
The system was designed with **Separation of Concerns** to ensure that frontend developers don't need to touch React components just to upload a new PDF. 

It uses a layered architecture spanning 9 distinct layers.

## The 9 Layers

1. **Types (`types/pdf.ts`)**
   - Single source of truth for the data schema. Ensures type safety across the entire pipeline.
   
2. **Data (`lib/data/catalogues.ts`)**
   - The central repository. Currently a static array, but structured exactly like a NoSQL database response, making it trivial to swap to MongoDB/Firebase later.
   
3. **Utilities (`lib/pdf/`)**
   - Pure functions without side effects.
   - `utils.ts`: Filtering, sorting, and slug generation.
   - `metadata.ts`: Generates SEO tags and JSON-LD schema.
   - `tracking.ts`: Handles analytics.

4. **Services (`services/pdf/catalogueService.ts`)**
   - The data access layer. Components *only* talk to the service, never directly to the data file. If we switch to a real database, we only rewrite this one file.

5. **API Routes (`app/api/catalogues/`)**
   - Exposes the service layer to the client side. Required for the dynamic search and filter hooks.

6. **Components (`components/catalogues/`)**
   - Dumb, presentational components. They take props and render UI. They do not fetch their own data (except the interactive filters which talk to the API via hooks).

7. **Hooks (`hooks/`)**
   - `useCatalogueFilters.ts`: Manages state and syncs it automatically with URL search parameters (e.g., `?category=Products&q=heat`).
   
8. **Pages (`app/downloads/`)**
   - Next.js Server Components. They fetch data on the server via `catalogueService` and pass it down to client components, optimizing load times and SEO.

9. **Documentation (`docs/pdf-system/`)**
   - This directory. Ensuring future maintainers understand the original intent.

## Performance Considerations
- **Debounced Searching:** The custom hook waits 400ms after the user stops typing before hitting the API.
- **Server Components:** Initial load is handled entirely on the server.
- **URL State:** Because state is in the URL, users can share links to specific search results or filtered views.
