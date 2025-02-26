export default function Footer() {
    return (
      <footer className="py-6 md:py-8 bg-azhak-maroon text-azhak-beige">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg sm:text-xl font-bold text-gold">Azhak Artic</h3>
            <p className="mt-2 text-sm sm:text-base">Futuristic Fashion for a Bold Tomorrow</p>
          </div>
          <div>
            <p className="text-sm sm:text-base">© 2025 Azhak Artic. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4 mt-2">
              <a href="#" className="hover:text-gold text-sm sm:text-base">Instagram</a>
              <a href="#" className="hover:text-gold text-sm sm:text-base">Twitter</a>
              <a href="#" className="hover:text-gold text-sm sm:text-base">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }