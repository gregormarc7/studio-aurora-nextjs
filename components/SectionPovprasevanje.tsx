"use client"

import { useState } from "react"
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi"
import { FaStar } from "react-icons/fa"

export default function SectionPovprasevanje() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    arrival: "",
    departure: "",
    guests: "2 osebi",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("sent")
        alert("✅ Sporočilo je bilo uspešno poslano. Odgovorili vam bomo v najkrajšem možnem času.")
        setForm({
          name: "",
          email: "",
          phone: "",
          arrival: "",
          departure: "",
          guests: "2 osebi",
          message: "",
        })
      } else {
        throw new Error("Pošiljanje ni uspelo.")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
      alert("❌ Prišlo je do napake pri pošiljanju. Poskusite znova ali nas kontaktirajte direktno.")
    }
  }

  return (
    <section id="povprasevanje" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Leva stran */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Rezervirajte svoj <span className="text-pink-400">pobeg</span>
          </h2>
          <p className="text-gray-600">
            Pripravite se na nepozaben dopust v Studio Aurora. Kontaktirajte nas za rezervacijo ali dodatne informacije.
          </p>

          <div className="space-y-4">
            <ContactInfo icon={<HiOutlineMail />} label="Email" value="studioauroraizola@gmail.com" />
            <ContactInfo icon={<HiOutlinePhone />} label="Telefon" value="+386 41 430 460 ali +386 40 585 604 " />
            <ContactInfo icon={<HiOutlineLocationMarker />} label="Lokacija" value="Na terasah 2, 6310 Izola, Slovenija" />
          </div>

          <div className="bg-white rounded-xl shadow px-6 py-4 mt-4">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-yellow-500">
              <FaStar /> Hitra dejstva
            </h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>Check-in: <strong>16:00</strong></li>
              <li>Check-out: <strong>11:00</strong></li>
              <li>Maksimalno gostov: <strong>2</strong></li>
              
            </ul>
          </div>
        </div>

        {/* Desna stran – obrazec */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-6">
          <div className="text-lg font-semibold">Pošljite povpraševanje</div>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ime in priimek *" required className="input" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email naslov *" required className="input" />
            <input type="text" name="arrival" value={form.arrival} onChange={handleChange} placeholder="Prihod (dd. mm. yyyy)" className="input" />
            <input type="text" name="departure" value={form.departure} onChange={handleChange} placeholder="Odhod (dd. mm. yyyy)" className="input" />
            <select name="guests" value={form.guests} onChange={handleChange} className="input col-span-2 md:col-span-1">
              <option>1 oseba</option>
              <option>2 osebi</option>
            </select>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon" className="input" />
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Povejte nam več o vaših željah..." rows={4} className="input" />
          <button type="submit" disabled={status === "sending"} className="bg-[#2DC6F7] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">
            {status === "sending" ? "Pošiljanje..." : "📩 Pošlji povpraševanje"}
          </button>
        </form>
      </div>
    </section>
  )
}

function ContactInfo({ icon, label, value }: { icon: JSX.Element, label: string, value: string }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
      <div className="text-xl text-[#2DC6F7] mt-1">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  )
}
