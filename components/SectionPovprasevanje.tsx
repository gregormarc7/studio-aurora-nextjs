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
        alert("\u2705 Sporo\u010dilo je bilo uspe\u0161no poslano. Odgovorili vam bomo v najkraj\u0161em mo\u017enem \u010dasu.")
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
        throw new Error("Po\u0161iljanje ni uspelo.")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
      alert("\u274C Pri\u0161lo je do napake pri po\u0161iljanju. Poskusite znova ali nas kontaktirajte direktno.")
    }
  }

  return (
    <section id="povprasevanje" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Naslov */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
            Kontakt & Rezervacija
          </span>
        </div>
        <h2 className="text-center text-4xl font-bold mt-1">
          Rezervirajte svoj <span className="text-[#2DC6F7]">pobeg</span>
        </h2>
        <p className="mt-3 mb-12 text-center text-lg text-gray-700 max-w-3xl mx-auto">
          Pripravite se na nepozaben dopust v Studio Aurora. Kontaktirajte nas za rezervacijo ali dodatne informacije.
        </p>

        {/* Glavna mre\u017ea */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Leva stran */}
          <div className="space-y-6">
            <ContactInfo icon={<HiOutlineMail />} label="Email" value="studioauroraizola@gmail.com" />
            <ContactInfo icon={<HiOutlinePhone />} label="Telefon" value="+386 41 430 460 ali +386 40 585 604" />
            <ContactInfo icon={<HiOutlineLocationMarker />} label="Lokacija" value="Na terasah 2, 6310 Izola, Slovenija" />

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
            <div className="text-lg font-semibold">Po\u0161ljite povpra\u0161evanje</div>
            <p className="text-sm text-gray-500 mb-4">Izpolnite obrazec in odgovorili vam bomo v najkraj\u0161em \u010dasu.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ime in priimek *" required className="input" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email naslov *" required className="input" />

              {/* Polja za datum z la\u017enim placeholderjem */}
              <div className="relative">
                <input
                  type="date"
                  name="arrival"
                  value={form.arrival}
                  onChange={handleChange}
                  required
                  className="input text-gray-900"
                />
                {!form.arrival && (
                  <span className="pointer-events-none absolute left-4 top-2.5 text-gray-400 text-sm">
                    Prihod
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  type="date"
                  name="departure"
                  value={form.departure}
                  onChange={handleChange}
                  required
                  className="input text-gray-900"
                />
                {!form.departure && (
                  <span className="pointer-events-none absolute left-4 top-2.5 text-gray-400 text-sm">
                    Odhod
                  </span>
                )}
              </div>

              <select name="guests" value={form.guests} onChange={handleChange} className="input">
                <option>1 oseba</option>
                <option>2 osebi</option>
              </select>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon" className="input" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Povejte nam ve\u010d o va\u0161ih \u017eeljah in potrebah..." rows={4} className="input" />
            <button type="submit" disabled={status === "sending"} className="w-full bg-[#2DC6F7] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">
              {status === "sending" ? "Po\u0161iljanje..." : "\ud83d\udce9 Po\u0161lji povpra\u0161evanje"}
            </button>
          </form>
        </div>
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
