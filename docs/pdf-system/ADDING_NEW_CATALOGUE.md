# Adding a New Catalogue to AEX

This system has been designed so that you **never have to touch UI code** to add a new PDF. 

## Step 1: Upload the PDF
Upload your actual `.pdf` file to the `public/pdfs/` directory in the project.

## Step 2: Use the Admin Helper Tool
1. Run the local development server (`npm run dev`)
2. Navigate to `http://localhost:3000/admin/catalogues`
3. Fill out the form with the PDF's details
   - Ensure the "File Name" exactly matches the PDF you uploaded
   - Mark "Featured" if it should appear at the top
   - Mark "Requires Lead" if it's a premium document (like a Company Profile)
4. Click **Generate Object Code**
5. Click **Copy**

## Step 3: Paste into the Database
1. Open `lib/data/catalogues.ts` in your code editor
2. Scroll to the bottom of the `catalogues` array
3. Paste the generated code before the final closing `];` bracket.

## Step 4 (Optional): Add a Thumbnail
If you don't add a thumbnail, the system will show a fallback PDF icon. To add a thumbnail:
1. Create a `.jpg` or `.png` image of the first page of the PDF
2. Save it to `public/pdfs/thumbnails/`
3. Make sure the filename matches the slug (e.g., `my-new-pdf.jpg`)
4. Add the `thumbnailUrl: "/pdfs/thumbnails/my-new-pdf.jpg"` property to the object in `lib/data/catalogues.ts`

That's it! The new catalogue will automatically appear on the Downloads page, be fully searchable, filterable, and have its own dedicated detail page with SEO metadata.
