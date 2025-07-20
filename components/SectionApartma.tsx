export default function SectionApartma() {
  const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)

  return (
    <section id="apartma" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Apartma</h2>
        <p className="mb-8">Naš apartma ponuja udobje in razgled, ki vam bo ostal v spominu.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Studio Aurora ${idx + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
