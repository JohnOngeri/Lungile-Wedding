export function SeeYouThere() {
  return (
    <section
      className="bg-cover bg-fixed bg-center px-8 py-[150px] text-center max-sm:bg-scroll"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20,36,28,0.5), rgba(20,36,28,0.5)), url('/images/see-you-there.jpg')",
      }}
    >
      <p className="m-0 font-script text-[clamp(40px,7vw,62px)] text-gold-bright">see you there</p>
      <p className="mt-[18px] mb-0 font-serif text-[clamp(18px,2.6vw,24px)] italic tracking-[0.08em] text-parchment">
        Saturday, the third of April, two thousand and twenty-seven
      </p>
    </section>
  )
}
