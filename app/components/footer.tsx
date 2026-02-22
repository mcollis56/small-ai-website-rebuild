import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="container-custom mt-14 pb-10">
      <div className="factory-block bg-[#2e5cff] px-6 py-5 text-[#fffdf5]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.1em]">
            Small-AI Factory Floor - Turning messy operations into AI systems.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link className="nav-pill border-[#fffdf5] bg-[#fffdf5] text-[#2e5cff]" href="/privacy">
              Privacy
            </Link>
            <Link className="nav-pill border-[#fffdf5] bg-[#fffdf5] text-[#2e5cff]" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
