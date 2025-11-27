import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Clock, 
  Shirt, 
  Package, 
  MapPin, 
  Phone, 
  Mail,
  Star,
  Droplet,
  Users,
  Shield,
  DollarSign
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Charles Street Laundromat</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#reviews" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild className="hidden md:inline-flex">
            <a href="tel:8153982677">Call Now</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Serving Rockford Since 2018
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Neighborhood Laundry Experts
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Clean clothes, friendly service, and fair prices. We're here to make laundry day easier with modern machines, professional staff, and convenient drop-off services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-base" asChild>
                  <a href="#services">Explore Services</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <a href="tel:8153982677">
                    <Phone className="mr-2 h-4 w-4" />
                    (815) 398-2677
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">4.0 stars • 169 reviews</span>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img 
                  src="/hero-laundromat.jpg" 
                  alt="Modern laundromat interior with clean washing machines" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Open Daily</p>
                    <p className="font-semibold text-foreground">7 AM - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you prefer to do it yourself or let us handle it, we've got you covered with flexible laundry solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Self-Service */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Shirt className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Self-Service Laundry</h4>
                <p className="text-muted-foreground">
                  Modern coin-operated washers and dryers in single, double, and triple-load sizes. Perfect for quick and affordable laundry.
                </p>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-primary">$7-15 per visit</p>
                </div>
                <img 
                  src="/hero-laundromat.jpg" 
                  alt="Self-service washing machines" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Wash & Fold */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Package className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Wash & Fold Service</h4>
                <p className="text-muted-foreground">
                  Let our professional staff handle your laundry. We wash, dry, and fold your clothes with care. Hangers available upon request.
                </p>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-primary">$1.00 per pound</p>
                </div>
                <img 
                  src="/services-washfold.jpg" 
                  alt="Professionally folded laundry" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Drop-Off & Pick-Up */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Drop-Off & Pick-Up</h4>
                <p className="text-muted-foreground">
                  Convenient drop-off and pick-up service for busy schedules. Drop off your laundry and pick it up fresh and clean.
                </p>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-primary">$10-20 per week</p>
                </div>
                <img 
                  src="/services-dropoff.jpg" 
                  alt="Drop-off service counter" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Large Capacity */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Droplet className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Large Capacity Machines</h4>
                <p className="text-muted-foreground">
                  Extra-large tubs perfect for bulky items like comforters, blankets, and sleeping bags. Get big loads done in one wash.
                </p>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-primary">Available now</p>
                </div>
                <img 
                  src="/machines-large.jpg" 
                  alt="Large capacity washing machine" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Amenities Card */}
            <Card className="border-2 bg-accent/20 md:col-span-2">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-4">Additional Amenities</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">On-Site Attendant</p>
                      <p className="text-sm text-muted-foreground">Friendly staff available during all business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Droplet className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Soft Water Systems</p>
                      <p className="text-sm text-muted-foreground">Reduces soap usage and protects your clothes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Wheelchair Accessible</p>
                      <p className="text-sm text-muted-foreground">Accessible entrance and parking available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Clean & Well-Maintained</p>
                      <p className="text-sm text-muted-foreground">Vending machines and bathroom facilities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-24 bg-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Charles Street?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a laundromat—we're your neighborhood laundry partner committed to quality and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border text-center space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Fair Prices</h4>
              <p className="text-sm text-muted-foreground">Competitive pricing that fits your budget without compromising quality</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border text-center space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Friendly Staff</h4>
              <p className="text-sm text-muted-foreground">Professional and courteous attendants ready to assist you</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border text-center space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Clean Facility</h4>
              <p className="text-sm text-muted-foreground">Well-maintained machines and spotless environment every day</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border text-center space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Convenient Hours</h4>
              <p className="text-sm text-muted-foreground">Open 7 days a week from 7 AM to 8 PM for your convenience</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
            <img 
              src="/location-exterior.jpg" 
              alt="Charles Street Laundromat exterior" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it—hear from our satisfied customers who trust us with their laundry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground italic">"Great people and facility! The machines and building are always clean and well taken care of. The staff is friendly and professional."</p>
                <div className="pt-2">
                  <p className="font-semibold text-foreground">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">Google Review</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-yellow-400" />
                </div>
                <p className="text-foreground italic">"Friendly staff and fair prices. I love the large tubs for my comforters. Always has an attendant on duty which makes me feel secure."</p>
                <div className="pt-2">
                  <p className="font-semibold text-foreground">Michael R.</p>
                  <p className="text-sm text-muted-foreground">Google Review</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground italic">"The drop-off service is a lifesaver! Cathy is so friendly and my clothes always come back perfectly folded. Highly recommend!"</p>
                <div className="pt-2">
                  <p className="font-semibold text-foreground">Jennifer L.</p>
                  <p className="text-sm text-muted-foreground">Nextdoor Review</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-foreground">4.0 Stars</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">169 Google Reviews</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-primary font-semibold">Neighborhood Favorite 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Visit Us Today</h3>
              <p className="text-lg text-muted-foreground">
                Stop by our convenient Rockford location or give us a call. We're here to make your laundry day easier!
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">2125 Charles St</p>
                    <p className="text-muted-foreground">Rockford, IL 61104</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:8153982677" className="text-primary hover:underline">(815) 398-2677</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:charlesstshoerep@att.net" className="text-primary hover:underline">charlesstshoerep@att.net</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-muted-foreground">Monday - Sunday</p>
                    <p className="text-muted-foreground">7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" asChild>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=2125+Charles+St,+Rockford,+IL+61104" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
              <h4 className="text-2xl font-bold text-foreground mb-6">Hours of Operation</h4>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-medium text-foreground">{day}</span>
                    <span className="text-muted-foreground">7:00 AM - 8:00 PM</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                <p className="text-sm text-center text-foreground">
                  <strong>Open 7 Days a Week</strong> for your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6" />
                <h5 className="text-lg font-bold">Charles Street Laundromat</h5>
              </div>
              <p className="text-sm opacity-80">
                Your trusted neighborhood laundromat in Rockford, IL. Serving the community with quality laundry services since 2018.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
                <li><a href="#why-us" className="opacity-80 hover:opacity-100 transition-opacity">Why Choose Us</a></li>
                <li><a href="#reviews" className="opacity-80 hover:opacity-100 transition-opacity">Reviews</a></li>
                <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Contact Info</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li>2125 Charles St, Rockford, IL 61104</li>
                <li><a href="tel:8153982677" className="hover:opacity-100 transition-opacity">(815) 398-2677</a></li>
                <li><a href="mailto:charlesstshoerep@att.net" className="hover:opacity-100 transition-opacity">charlesstshoerep@att.net</a></li>
                <li>Open Daily: 7:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} Charles Street Laundromat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
