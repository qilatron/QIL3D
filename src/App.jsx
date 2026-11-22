import { useState, useEffect } from "react"
const services = [
  {
    number: "01",
    title: "FDM 3D Printing",
    description: "Precision additive manufacturing for functional parts, prototypes and custom components.",
    tag: "THERMOPLASTIC"
  },
  {
    number: "02",
    title: "Resin Printing",
    description: "High-detail printing for intricate models, miniatures and professional applications.",
    tag: "HIGH DETAIL"
  },
  {
    number: "03",
    title: "Rapid Prototyping",
    description: "Turn your digital concepts into physical prototypes with a streamlined workflow.",
    tag: "ENGINEERING"
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  useEffect(() => {
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      setSelectedImage(null)
    }
  }

  window.addEventListener("keydown", handleEscape)

  return () => {
    window.removeEventListener("keydown", handleEscape)
  }
}, [])
  return (
    <div className="min-h-screen bg-[#090909] text-white">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-[#090909]/95 backdrop-blur-md flex items-center justify-between px-6 md:px-16 py-6 border-b border-white/10">

        <a href="#" className="text-2xl font-black tracking-tight">
  QIL<span className="text-orange-500">3D.</span>
</a>

        <div className="hidden md:flex items-center gap-9 text-sm text-gray-300">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#materials" className="hover:text-orange-500">Materials</a>
          <a href="#estimator" className="hover:text-orange-500">
  Price Calculator
</a>
          <a href="#machines" className="hover:text-orange-500">Machines</a>
          <a href="#gallery" className="hover:text-orange-500">
  Gallery
</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </div>

        <a
          href="#quote-form"
          className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-5 py-3 rounded-lg text-sm"
        >
          Get A Quote ↗
        </a>
        <button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white text-3xl ml-3"
  aria-label="Toggle menu"
>
  {menuOpen ? "×" : "☰"}
</button>
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-[#090909] border-t border-white/10 p-6 flex flex-col gap-5 z-50 md:hidden">
    {[
      ["Home", "#home"],
      ["Services", "#services"],
      ["Price Calculator", "#estimator"],
      ["Materials", "#materials"],
      ["Machines", "#machines"],
      ["Gallery", "#gallery"],
      ["About", "#about"],
      ["Contact", "#contact"]
    ].map(([label, link]) => (
      <a
        key={label}
        href={link}
        onClick={() => setMenuOpen(false)}
        className="text-white hover:text-orange-500"
      >
        {label}
      </a>
    ))}
  </div>
)}

      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden px-6 md:px-16 py-24 md:py-36"
      >

        <div className="absolute w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full right-0 top-10 pointer-events-none"></div>

        <div className="relative max-w-5xl">

          <div className="inline-flex items-center gap-2 border border-orange-500/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-xs tracking-[0.2em] text-orange-400">
              NEXT GENERATION MANUFACTURING
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight">
            IDEAS INTO
            <br />
            <span className="text-orange-500">REALITY.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl mt-8 leading-relaxed">
            From digital designs to physical products.
            Experience precision 3D printing, rapid prototyping
            and custom manufacturing.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#quote-form"
              className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-4 rounded-lg transition"
            >
              Start Your Project ↗
            </a>

            <a
              href="#services"
              className="border border-white/20 hover:border-orange-500 px-8 py-4 rounded-lg transition"
            >
              Explore Services
            </a>

          </div>

        </div>

        
        {/* PARENT COMPANY LOGO */}
        <div className="hidden lg:block absolute right-0 top-3 w-[720px] h-[720px]">
          <img
            src="/parent.png"
            alt="QILATRON Innovations and Solutions"
            className="w-full h-full object-contain"
          />
        </div>

        {/* HERO VISUAL */}
        <div className="relative mt-20 h-[350px] md:h-[500px] rounded-2xl border border-white/10 overflow-hidden bg-[#151515]">

          <img
            src="/hero-printer.avif"
            alt="Industrial 3D printer"
            fetchPriority="high"
  decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-8 md:p-14">
            <p className="text-orange-500 text-xs tracking-[0.3em] font-bold">
              PRECISION MANUFACTURING
            </p>

            <h2 className="text-3xl md:text-5xl font-black mt-4">
              BUILT LAYER <br />
              <span className="text-orange-500">BY LAYER.</span>
            </h2>

            <p className="text-gray-300 mt-4">
              From digital concepts to physical reality.
            </p>
          </div>

        </div>


      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="px-6 md:px-16 py-24 bg-[#101010]">

        <p className="text-orange-500 tracking-[0.25em] text-xs font-bold">
          WHAT WE DO
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-5">
          Our <span className="text-orange-500">Capabilities.</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-xl">
          Manufacturing solutions designed to transform
          concepts into functional, high-quality products.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {services.map((service) => (

            <div
              key={service.number}
              className="group border border-white/10 bg-[#151515] rounded-xl p-8 hover:border-orange-500/60 transition"
            >

              <div className="flex justify-between items-center">
                <span className="text-orange-500 text-sm font-bold">
                  {service.number}
                </span>
                <span className="text-gray-600">↗</span>
              </div>

              <h3 className="text-2xl font-bold mt-12 group-hover:text-orange-500 transition">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 text-xs tracking-widest text-orange-400">
                {service.tag}
              </div>

            </div>

          ))}

        </div>

      </section>

      
{/* PRINTER FLEET SECTION */}
<section id="machines" className="px-6 md:px-16 py-24 bg-[#090909]">

  <p className="text-orange-500 tracking-[0.25em] text-xs font-bold">
    OUR TECHNOLOGY
  </p>

  <h2 className="text-4xl md:text-5xl font-black mt-5">
    The Machines <span className="text-orange-500">Behind Every Layer.</span>
  </h2>

  <p className="text-gray-400 mt-5 max-w-xl">
    Explore the printing technologies and machine categories
    available for different manufacturing requirements.
  </p>

  <div className="grid md:grid-cols-3 gap-6 mt-14">

    {[
      {
        number: "01",
        type: "FDM TECHNOLOGY",
        name: "High-Speed FDM",
        icon: "🖨️",
        description: "Efficient production of functional parts, prototypes and custom components.",
        features: ["Thermoplastic printing", "Rapid prototyping", "Multiple material options"],
        volume: "Contact us for exact build volume"
      },
      {
        number: "02",
        type: "LARGE FORMAT FDM",
        name: "Large-Format FDM",
        icon: "🏭",
        description: "Designed for larger components, enclosures and engineering prototypes.",
        features: ["Large component production", "Functional parts", "Custom applications"],
        volume: "Contact us for exact build volume"
      },
      {
        number: "03",
        type: "MSLA TECHNOLOGY",
        name: "Resin Printing",
        icon: "💎",
        description: "High-detail printing for miniatures, intricate models and precision prototypes.",
        features: ["Fine surface details", "Complex geometry", "Detailed models"],
        volume: "Contact us for exact build volume"
      }
    ].map((machine) => (

      <div
        key={machine.number}
        className="group bg-[#151515] border border-white/10 rounded-xl p-7 hover:border-orange-500/60 transition duration-300"
      >

        <div className="flex justify-between items-center">

          <span className="text-orange-500 text-xs font-bold tracking-widest">
            MACHINE / {machine.number}
          </span>

          <span className="text-xs text-gray-500 tracking-widest font-bold">
  QIL3D
</span>

        </div>

        
<div className="h-56 bg-gradient-to-br from-[#292929] to-[#101010] rounded-lg mt-8 flex items-center justify-center border border-white/5 overflow-hidden">

  <img
    src={
      machine.number === "01"
        ? "/i11.jpg"
        : machine.number === "02"
        ? "/i12.jpg"
        : "/i13.jpg"
    }
    alt={machine.name}
    loading="lazy"
decoding="async"
    className="w-full h-full object-contain p-4"
  />
  

</div>


        <p className="text-orange-500 text-xs tracking-widest mt-8">
          {machine.type}
        </p>

        <h3 className="text-2xl font-bold mt-3">
          {machine.name}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          {machine.description}
        </p>

        <div className="border-t border-white/10 mt-6 pt-5">

          <p className="text-xs text-gray-500 mb-4">
            CAPABILITIES
          </p>

          {machine.features.map((feature) => (
            <p key={feature} className="text-sm text-gray-300 mb-3">
              <span className="text-orange-500 mr-3">✓</span>
              {feature}
            </p>
          ))}

        </div>

        <div className="mt-5 pt-5 border-t border-white/10">

          <p className="text-xs text-gray-500">
            BUILD VOLUME
          </p>

          <p className="text-sm text-orange-400 mt-2">
            {machine.volume}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>
      
{/* PROJECT GALLERY */}
<section id="gallery" className="px-6 md:px-16 py-24 bg-[#101010]">

  <p className="text-orange-500 tracking-[0.25em] text-xs font-bold">
    SELECTED WORK
  </p>

  <h2 className="text-4xl md:text-5xl font-black mt-5">
    Made to <span className="text-orange-500">Impress.</span>
  </h2>

  <p className="text-gray-400 mt-5 max-w-xl">
    Explore examples of the products and components
    that can be brought to life through 3D printing.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

    {[
      {
        image: "/i1.jpg",
        category: "ENGINEERING",
        name: "Mechanical Components"
      },
      {
        image: "/i2.jpg",
        category: "CUSTOM DESIGN",
        name: "Custom 3D Models"
      },
      {
        image: "/i3.jpg",
        category: "ARCHITECTURE",
        name: "Architectural Models"
      },
      {
        image: "/i4.jpg",
        category: "PROTOTYPING",
        name: "Functional Prototypes"
      },
      {
        image: "/i5.jpg",
        category: "INDUSTRIAL",
        name: "Industrial Enclosures"
      },
      {
        image: "/i6.jpg",
        category: "CREATIVE",
        name: "Custom Creations"
      }
    ].map((project) => (

      <div
        key={project.name}
        className="group bg-[#171717] rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition"
      >

        
<div
  className="h-64 overflow-hidden bg-[#222] cursor-zoom-in"
  onClick={() => setSelectedImage(project)}
>
  <img
  src={project.image}
  alt={project.name}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>
</div>


        <div className="p-6">

          <p className="text-orange-500 text-xs tracking-widest">
            {project.category}
          </p>

          <h3 className="text-xl font-bold mt-3">
            {project.name}
          </h3>

          <p className="text-gray-500 text-sm mt-3">
            Custom manufacturing and precision 3D printing.
          </p>

        </div>

      </div>

    ))}

  </div>

</section>

      
{/* PRICE ESTIMATOR SECTION */}
<section id="estimator" className="py-24 px-6 bg-[#111111]">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <p className="text-orange-500 font-bold tracking-widest uppercase text-sm">
        Instant Estimate
      </p>
      <h2 className="text-4xl md:text-5xl font-black mt-3">
        3D PRINTING <span className="text-orange-500">PRICE CALCULATOR</span>
      </h2>
      <p className="text-gray-400 mt-4">
        Calculate an approximate price for your 3D printing project.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-[#1b1b1b] border border-white/10 rounded-2xl p-7 space-y-6">
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Select Material
          </label>
          <select
            id="qil-material"
            className="w-full bg-[#111] border border-white/10 rounded-lg p-4 text-white"
          >
            <option value="4">PLA / PLA+ — ₹4 per gram</option>
            <option value="5">PETG — ₹5 per gram</option>
            <option value="6">ABS / ASA — ₹6 per gram</option>
            <option value="7">TPU — ₹7 per gram</option>
            <option value="9">Standard Resin — ₹9 per gram</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Estimated Weight (grams)
          </label>
          <input
            id="qil-weight"
            type="number"
            min="0.1"
            step="0.1"
            defaultValue="50"
            className="w-full bg-[#111] border border-white/10 rounded-lg p-4 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Quantity
          </label>
          <input
            id="qil-quantity"
            type="number"
            min="1"
            step="1"
            defaultValue="1"
            className="w-full bg-[#111] border border-white/10 rounded-lg p-4 text-white"
          />
        </div>

        
      {/* OPTIONAL ADD-ON SERVICES */}
      <div className="border-t border-white/10 pt-5 space-y-4">
        <h3 className="text-white font-bold text-lg">
          Additional Services
        </h3>

        <label className="flex items-center gap-3 text-gray-300">
          <input id="qil-express" type="checkbox" className="accent-orange-500" />
          <span>Express Printing (+25%)</span>
        </label>

        <label className="flex items-center gap-3 text-gray-300">
          <input id="qil-multicolor" type="checkbox" className="accent-orange-500" />
          <span>Multi-Colour Printing (+₹1.50/gram)</span>
        </label>

        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Post-processing
          </label>
          <select id="qil-post" className="w-full bg-[#111] border border-white/10 rounded-lg p-3 text-white">
            <option value="0">No post-processing</option>
            <option value="150">Basic – ₹150</option>
            <option value="500">Advanced – ₹500</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">
            CAD Design / File Fixing
          </label>
          <select id="qil-cad" className="w-full bg-[#111] border border-white/10 rounded-lg p-3 text-white">
            <option value="0">Not required</option>
            <option value="300">Basic – ₹300</option>
            <option value="800">Advanced – ₹800</option>
          </select>
  </div>
</div>

        <button
          type="button"
          onClick={() => {
            const rate = Number(document.getElementById("qil-material").value)
            const weight = Number(document.getElementById("qil-weight").value)
            const quantity = Number(document.getElementById("qil-quantity").value)

            if (!Number.isFinite(weight) || weight <= 0 ||
                !Number.isInteger(quantity) || quantity < 1) {
              alert("Please enter a valid weight and quantity.")
              return
            }

                 
      const subtotal = rate * weight * quantity

      const smallPrintCharge = weight <= 5 && quantity === 1 ? 20 : 0

      const expressCharge = document.getElementById("qil-express").checked
        ? subtotal * 0.25
        : 0

      const multicolorCharge =
        document.getElementById("qil-multicolor").checked
          ? weight * quantity * 1.5
          : 0

      const postCharge = Number(
        document.getElementById("qil-post").value
      )

      const cadCharge = Number(
        document.getElementById("qil-cad").value
      )

      const beforeDiscount =
        subtotal +
        smallPrintCharge +
        expressCharge +
        multicolorCharge +
        postCharge +
        cadCharge

      let discountRate = 0

      if (quantity >= 50) discountRate = 0.20
      else if (quantity >= 26) discountRate = 0.15
      else if (quantity >= 10) discountRate = 0.10

      if (beforeDiscount > 500 && discountRate < 0.05) {
        discountRate = 0.05
      }

      const discount = beforeDiscount * discountRate
      const afterDiscount = beforeDiscount - discount

      const total = Math.max(150, afterDiscount)


            
      
      document.getElementById("qil-result").innerHTML = `
        <div class="space-y-4 text-sm">

          <div class="flex justify-between">
            <span>Printing cost</span>
            <span>₹${subtotal.toFixed(2)}</span>
          </div>

          <div class="flex justify-between">
            <span>Small print charge</span>
            <span>₹${smallPrintCharge.toFixed(2)}</span>
          </div>

          <div class="flex justify-between">
            <span>Express printing</span>
            <span>₹${expressCharge.toFixed(2)}</span>
          </div>

          <div class="flex justify-between">
            <span>Multi-colour printing</span>
            <span>₹${multicolorCharge.toFixed(2)}</span>
          </div>

          <div class="flex justify-between">
            <span>Post-processing</span>
            <span>₹${postCharge.toFixed(2)}</span>
          </div>

          <div class="flex justify-between">
            <span>CAD design / file fixing</span>
            <span>₹${cadCharge.toFixed(2)}</span>
          </div>

          <div class="border-t border-white/10 pt-4 space-y-3">

            <div class="flex justify-between font-semibold">
              <span>Total Before Discount</span>
              <span>₹${beforeDiscount.toFixed(2)}</span>
            </div>

            <div class="flex justify-between text-green-400">
              <span>Discount (${discountRate * 100}%)</span>
              <span>-₹${discount.toFixed(2)}</span>
            </div>

          </div>

          <div class="border-t border-orange-500/30 pt-5">
            <div class="text-gray-400">FINAL ESTIMATED PRICE</div>

            <div class="text-4xl font-black text-orange-500 mt-2">
              ₹${total.toFixed(2)}
            </div>



            ${afterDiscount < 150
              ? '<p class="text-xs text-gray-400 mt-2">Minimum order value of ₹150 applied.</p>'
              : ''}
          </div>

        </div>
      `


          }}
          className="w-full bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 rounded-lg transition"
        >
          CALCULATE ESTIMATED PRICE ↗
        </button>
      </div>

      <div className="bg-[#1b1b1b] border border-orange-500/30 rounded-2xl p-7 flex flex-col justify-center">
        <p className="text-orange-500 text-sm font-bold tracking-widest">
          YOUR ESTIMATE
        </p>
        <h3 className="text-2xl font-bold mt-3 mb-6">
          Printing Cost Breakdown
        </h3>

        <div id="qil-result" className="text-gray-300">
          <p className="text-gray-400">
            Select your material, enter weight and quantity, then calculate
            to see your estimated price.
          </p>
        </div>

<button
  type="button"
  
onClick={() => {
  const result = document.getElementById("qil-result")
  const message = document.querySelector(
    '#quote-form textarea[name="message"]'
  )
  const materialField = document.querySelector(
    '#quote-form select[name="material"]'
  )
  const quantityField = document.querySelector(
    '#quote-form input[name="quantity"]'
  )

  if (!result || !message || !result.innerText.includes("FINAL ESTIMATED PRICE")) {
    alert("Please calculate your price first.")
    return
  }

  const materialSelect = document.getElementById("qil-material")
  const materialName = materialSelect.options[materialSelect.selectedIndex].text.split("—")[0].trim()

  const materialMap = {
    "PLA / PLA+": "PLA",
    "PETG": "PETG",
    "ABS / ASA": "ABS",
    "TPU": "TPU",
    "Standard Resin": "Resin"
  }

  materialField.value = materialMap[materialName] || "Not sure / Recommend"
  quantityField.value = document.getElementById("qil-quantity").value

  message.value =
    "QIL3D PRICE ESTIMATE\n\n" +
    "Material: " + materialName + "\n" +
    "Weight: " + document.getElementById("qil-weight").value + " grams per piece\n\n" +
    result.innerText +
    "\n\nPlease provide the final quotation."

  document.getElementById("quote-form").scrollIntoView({
    behavior: "smooth"
  })

  message.dispatchEvent(new Event("input", { bubbles: true }))
}}

  className="w-full mt-5 bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 rounded-lg transition"
>
  REQUEST THIS QUOTATION ↗
</button>


        <p className="text-xs text-gray-500 mt-8">
          This is an approximate estimate, not a final quotation.
          Actual pricing may vary based on model complexity, print time,
          supports and finishing requirements.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 md:px-16 py-24">

        <p className="text-orange-500 tracking-widest text-xs font-bold">
          THE QIL3D ADVANTAGE
        </p>

        <h2 className="text-4xl md:text-6xl font-black mt-6 max-w-3xl">
          Built for ideas.
          <span className="text-orange-500"> Designed for precision.</span>
        </h2>

        <p className="text-gray-400 text-lg mt-8 max-w-2xl leading-relaxed">
          We bring digital designs to life through modern
          additive manufacturing. From individual components
          to custom prototypes, every project starts with an idea.
        </p>

      </section>

{/* MATERIALS SECTION */}
<section id="materials" className="px-6 md:px-16 py-24 bg-[#101010]">

  <p className="text-orange-500 tracking-[0.25em] text-xs font-bold">
    MATERIAL SELECTION
  </p>

  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-5">

    <div>
      <h2 className="text-4xl md:text-5xl font-black">
        Materials for <span className="text-orange-500">Every Idea.</span>
      </h2>

      <p className="text-gray-400 mt-5 max-w-xl">
        Choose from a range of materials designed for
        different applications, strength requirements and finishes.
      </p>
    </div>

    <span className="text-orange-500 text-sm">
      05 MATERIAL OPTIONS ↗
    </span>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

    {[
      {
        name: "PLA",
        subtitle: "Everyday Prototyping",
        color: "#F0A34B",
        description: "Ideal for concept models, decorative objects and general-purpose prototypes.",
        features: ["Easy to print", "Multiple colours", "Good surface finish"]
      },
      {
        name: "PETG",
        subtitle: "Functional Components",
        color: "#438FC5",
        description: "A versatile material for functional parts requiring toughness and chemical resistance.",
        features: ["Good toughness", "Moisture resistance", "Functional parts"]
      },
      {
        name: "ABS",
        subtitle: "Engineering Applications",
        color: "#D7D7D7",
        description: "Suitable for demanding components requiring heat resistance and durability.",
        features: ["Heat resistance", "Durable", "Engineering parts"]
      },
      {
        name: "TPU",
        subtitle: "Flexible Printing",
        color: "#B28AE8",
        description: "Flexible material for protective covers, grips and shock-absorbing components.",
        features: ["Flexible", "Impact absorption", "Elastic properties"]
      },
      {
        name: "RESIN",
        subtitle: "High Detail Printing",
        color: "#E9D5B0",
        description: "Designed for intricate models, miniatures and detailed visual prototypes.",
        features: ["Fine details", "Smooth surfaces", "Complex geometry"]
      }
    ].map((material) => (

      <div
        key={material.name}
        className="group bg-[#171717] border border-white/10 rounded-xl p-7 hover:border-orange-500/60 transition duration-300"
      >

        <div className="flex justify-between items-center">

          <div
            className="w-12 h-12 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, white, ${material.color} 45%, #222 100%)`
            }}
          ></div>

          <span className="text-xs text-gray-500 tracking-widest">
            MATERIAL / 3D
          </span>

        </div>

        <h3 className="text-3xl font-black mt-8">
          {material.name}
        </h3>

        <p className="text-orange-500 text-sm mt-2">
          {material.subtitle}
        </p>

        <p className="text-gray-400 text-sm leading-relaxed mt-5 min-h-16">
          {material.description}
        </p>

        <div className="border-t border-white/10 mt-6 pt-5 space-y-3">

          {material.features.map((feature) => (
            <div key={feature} className="flex gap-3 text-sm text-gray-300">
              <span className="text-orange-500">✓</span>
              {feature}
            </div>
          ))}

        </div>

      </div>

    ))}

  </div>

</section>

      {/* QUOTE SECTION */}
      <section id="quote" className="px-6 md:px-16 py-20 bg-[#151515]"></section><section id="quote" className="px-6 md:px-16 py-20 bg-[#151515]">

        <div className="border border-orange-500/30 rounded-2xl p-8 md:p-14 bg-gradient-to-r from-[#20160f] to-[#111111]">

          <p className="text-orange-400 text-xs tracking-widest font-bold">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-5">
            Let's make it <span className="text-orange-500">real.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-lg">
            Tell us about your project and let us help you
            bring your next idea to life.
          </p>

          <a
            href="#quote-form"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-4 rounded-lg"
          >
            Request A Quote ↗
          </a>

        </div>

      </section>

      
{/* QUOTATION SECTION */}
<section id="quote-form" className="px-6 md:px-16 py-24 bg-[#101010]">

  <p className="text-orange-500 tracking-[0.25em] text-xs font-bold">
    START YOUR PROJECT
  </p>

  <h2 className="text-4xl md:text-5xl font-black mt-5">
    Get a <span className="text-orange-500">Quote.</span>
  </h2>

  <p className="text-gray-400 mt-5 max-w-xl">
    Share your project requirements and upload your 3D model.
    Our team will contact you with a quotation.
  </p>

  <form
    className="mt-12 max-w-3xl grid md:grid-cols-2 gap-6"
    onSubmit={(e) => {
      e.preventDefault()

      const form = e.currentTarget
      const data = new FormData(form)

      const name = data.get("name")
      const phone = data.get("phone")
      const email = data.get("email")
      const service = data.get("service")
      const material = data.get("material")
      const quantity = data.get("quantity")
      const message = data.get("message")
      const file = data.get("model")

      const whatsappNumber = "919326053705"

      const text = `
QIL3D - QUOTATION REQUEST

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Material: ${material}
Quantity: ${quantity}
Model file: ${file?.name || "Not attached"}

Requirements:
${message}

Please contact me with a quotation.
      `

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
      )
    }}
  >

    <div>
      <label className="block text-sm mb-2 text-gray-300">
        Full Name *
      </label>
      <input
        required
        name="name"
        placeholder="Enter your name"
        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-4 outline-none focus:border-orange-500"
      />
    </div>

    <div>
      <label className="block text-sm mb-2 text-gray-300">
        Phone Number *
      </label>
      <input
        required
        type="tel"
        name="phone"
        placeholder="Enter your number"
        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-4 outline-none focus:border-orange-500"
      />
    </div>

    <div>
      <label className="block text-sm mb-2 text-gray-300">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-4 outline-none focus:border-orange-500"
      />
    </div>

    <div>
      <label className="block text-sm mb-2 text-gray-300">
        Printing Service *
      </label>
      <select
        required
        name="service"
        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-4 outline-none focus:border-orange-500"
      >
        <option value="">Select service</option>
        <option>FDM Printing</option>
        <option>Resin Printing</option>
        <option>Rapid Prototyping</option>
        <option>Custom Manufacturing</option>
      </select>
    </div>

    <div>
      <label className="block text-sm mb-2 text-gray-300">
        Material
      </label>
      <select
        name="material"
        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-4 outline-none focus:border-orange-500"
      >
        <option>Not sure / Recommend</option>
        <option>PLA</option>
        <option>PETG</option>
        <option>ABS</option>
        <option>TPU</option>
        <option>Resin</option>
      </select>
    </div>

    <div>
      <label className="block text-sm mb-2 text-gray-300">
        Quantity *
      </label>
      <input
        required
        type="number"
        min="1"
        name="quantity"
        placeholder="Number of pieces"
        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-4 outline-none focus:border-orange-500"
      />
    </div>

    <div className="md:col-span-2">

      <label className="block text-sm mb-3 text-gray-300">
        Upload 3D Model
      </label>

      <input
        type="file"
        name="model"
        accept=".stl,.3mf,.step,.stp"
        onChange={(e) => {
          const file = e.target.files[0]
          if (!file) return

          const allowed = /\.(stl|3mf|step|stp)$/i

          if (!allowed.test(file.name)) {
            alert("Please select an STL, 3MF, STEP or STP file.")
            e.target.value = ""
            return
          }

          if (file.size > 20 * 1024 * 1024) {
            alert("File must be smaller than 20 MB.")
            e.target.value = ""
          }
        }}
        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-4 text-gray-400"
      />

      <p className="text-gray-500 text-xs mt-2">
        Supported formats: STL, 3MF, STEP and STP. Maximum 20 MB.
      </p>

    </div>

    <div className="md:col-span-2">

      <label className="block text-sm mb-2 text-gray-300">
        Project Requirements
      </label>

      <textarea
        name="message"
        rows="5"
        placeholder="Describe your project, dimensions, finish and requirements..."
        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg p-4 outline-none focus:border-orange-500"
      />

    </div>

    <div className="md:col-span-2">

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-lg p-5 transition"
      >
        SEND QUOTATION REQUEST VIA WHATSAPP ↗
      </button>

<p className="text-gray-400 text-xs text-center mt-3">
  After WhatsApp opens, please attach your STL, 3MF, STEP or STP file manually in the chat.
</p>

    
      <button
        type="button"
        onClick={(e) => {
          const form = e.currentTarget.closest("form")

          if (!form.checkValidity()) {
            form.reportValidity()
            return
          }

          const data = new FormData(form)

          const subject = "QIL3D - New Quotation Request"

          const body = `
      NEW QUOTATION REQUEST - QIL3D

      Customer Name: ${data.get("name") || ""}
      Phone Number: ${data.get("phone") || ""}
      Email Address: ${data.get("email") || ""}

      Service: ${data.get("service") || ""}
      Material: ${data.get("material") || ""}
      Quantity: ${data.get("quantity") || ""}

      3D Model File: ${data.get("model")?.name || "Not attached"}

      Project Requirements:
      ${data.get("message") || "Not provided"}

      --------------------------------
      QIL3D - Ideas into Reality.
      QILATRON Electronics & Solutions
      `

          const gmailURL =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=qilatron.3d%40gmail.com" +
            "&su=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body)

          window.open(gmailURL, "_blank")
        }}
        className="w-full mt-3 bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition cursor-pointer"
      >
        SEND QUOTATION REQUEST VIA EMAIL ↗
      </button>

<p className="text-gray-400 text-sm text-center mt-3">
  After clicking Email, attach your STL, 3MF, STEP or STP file manually before sending.
</p>


    </div>

  </form>

</section>

      {/* FOOTER */}
      <footer id="contact" className="px-6 md:px-16 py-12 border-t border-white/10">

        
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

  {/* COLUMN 1 — QUICK LINKS */}
  <div>
    <h3 className="text-white font-bold text-lg mb-5">
      QUICK LINKS
    </h3>

    <div className="flex flex-col gap-4 text-gray-400 text-sm">
      <a href="#home" className="hover:text-orange-500 transition">Home</a>
      <a href="#services" className="hover:text-orange-500 transition">Services</a>
      <a href="#machines" className="hover:text-orange-500 transition">Our Machines</a>
      <a href="#gallery" className="hover:text-orange-500 transition">Gallery</a>
      <a href="#estimator" className="hover:text-orange-500 transition">Price Calculator</a>
      <a href="#quote-form" className="hover:text-orange-500 transition">Get a Quote</a>
    </div>
  </div>

  {/* COLUMN 2 — OUR SERVICES */}
  <div>
    <h3 className="text-white font-bold text-lg mb-5">
      OUR SERVICES
    </h3>

    <div className="flex flex-col gap-4 text-gray-400 text-sm">
      <a href="#services" className="hover:text-orange-500 transition">FDM 3D Printing</a>
      <a href="#services" className="hover:text-orange-500 transition">Resin 3D Printing</a>
      <a href="#services" className="hover:text-orange-500 transition">Rapid Prototyping</a>
      <a href="#quote-form" className="hover:text-orange-500 transition">Custom Manufacturing</a>
      <a href="#quote-form" className="hover:text-orange-500 transition">CAD Design & File Fixing</a>
    </div>
  </div>

  {/* COLUMN 3 — CONTACT */}
  <div>
    <h3 className="text-white font-bold text-lg mb-5">
      CONTACT
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed">
      Contact us for custom printing and prototyping.
    </p>

    <div className="flex flex-col gap-4 mt-5 text-sm">
      <a
        href="https://wa.me/919326053705"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 transition"
      >
        WhatsApp: +91 93260 53705 ↗
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=qilatron.3d%40gmail.com&su=QIL3D%20Enquiry"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-orange-500 transition break-all"
      >
        Email: qilatron.3d@gmail.com ↗
      </a>
    </div>
  </div>

  {/* COLUMN 4 — QIL3D LOGO */}
  <div className="flex flex-col items-center lg:items-end">
    <img
      src="/favicon.svg"
      alt="QIL3D Logo"
      className="w-36 h-36 object-contain"
    />

    <p className="text-gray-500 text-sm mt-4 text-center lg:text-right">
      Engineering the Future.
    </p>
  </div>


      </div>

      <p className="text-gray-600 text-xs mt-12">
        © 2026 QIL3D. A QILATRON Electronics & Solutions venture.
      </p>

    </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-orange-500 transition"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            <p className="text-white text-center mt-4 text-lg font-semibold">
              {selectedImage.name}
            </p>
          </div>
        </div>
      )}


    </div>
  )
}

export default App

