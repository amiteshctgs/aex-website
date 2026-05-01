"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="AEX International Engineering Location"
        src="https://maps.google.com/maps?q=GIDC+Lodhika+Metoda+Jamnagar+Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>
  );
}
