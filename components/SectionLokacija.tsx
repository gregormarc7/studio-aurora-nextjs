import { FaStore, FaUtensils, FaUmbrellaBeach, FaParking, FaMountain, FaMapSigns } from 'react-icons/fa'
import { MdLocalGroceryStore, MdCameraAlt, MdDirections } from 'react-icons/md'

export default function SectionLokacija() {
  return (
    <section id="lokacija" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Naslov */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold bg-gray-200 text-gray-600 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Lokacija
          </span>
          <h2 className="text-4xl font-extrabold mb-4">
            Ključne <span className="text-primary">lokacije</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
          </p>
        </div>

        {/* GRID – zemljevid in seznam */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Google My Maps – embed interaktivni zemljevid */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1Md86RX51cMSg8EdYq8spTYiMp8suye0&ehbc=2E312F"
              width="100%"
              height="480"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>

          {/* Seznam lokacij */}
          <div className="space-y-4 text-sm">
            <LocationItem icon={<FaStore />} title="Hipermarket SPAR" />
            <LocationItem icon={<FaMapSigns />} title="Apartma – Studio Aurora Izola" />
            <LocationItem icon={<FaUmbrellaBeach />} title="Beach Delfinček" />
            <LocationItem icon={<FaUtensils />} title="Beach Garden Pizza & Grill" />
            <LocationItem icon={<FaUmbrellaBeach />} title="Bele Skale beach" />
            <LocationItem icon={<MdLocalGroceryStore />} title="DM Drogerie Markt trgovsko središče" />
            <LocationItem icon={<FaParking />} title="Free-of-Charge Parking" />
            <LocationItem icon={<FaUtensils />} title="Gostilna Manjada" />
            <LocationItem icon={<FaUtensils />} title="Gostilna Sonja" />
            <LocationItem icon={<MdCameraAlt />} title="Jagodje Viewpoint" />
            <LocationItem icon={<FaParking />} title="PZA Izola, San Simon" />
            <LocationItem icon={<FaParking />} title="Parkirišče San Simon" />
            <LocationItem icon={<FaParking />} title="Parkirišče za motorna kolesa" />
            <LocationItem icon={<FaUmbrellaBeach />} title="Plaža Simonov zaliv" />
            <LocationItem icon={<FaStore />} title="Mercator poslovni center" />
            <LocationItem icon={<FaMapSigns />} title="Pri ladjedelnici" />
            <LocationItem icon={<FaUtensils />} title="Primavera" />
            <LocationItem icon={<FaUmbrellaBeach />} title="Svetilnik Beach Izola" />
            <LocationItem icon={<MdDirections />} title="Tunnel Entrance" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* 🔹 Komponenta za posamezno lokacijo */
function LocationItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition">
      <div className="text-primary text-lg">{icon}</div>
      <div className="font-medium">{title}</div>
    </div>
  )
}
