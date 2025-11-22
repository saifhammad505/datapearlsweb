import { Linkedin, Mail } from "lucide-react";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">DataPearls</div>
            <p className="text-sm opacity-80">
              Transforming data chaos into insights, clarity & action.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  BI-as-a-Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  BI Dashboards
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Data Science & ML
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Cloud Data Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Custom Data Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Transportation
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Retail & E-commerce
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Finance
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© 2024 DataPearls Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
