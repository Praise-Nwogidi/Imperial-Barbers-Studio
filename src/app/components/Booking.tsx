import { useState } from "react";
import { Calendar, Clock, User, Scissors } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { toast } from "sonner";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    barber: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted! We'll contact you shortly to confirm.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      barber: "",
      date: "",
      time: ""
    });
  };

  return (
    <section id="booking" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Book Your <span className="text-amber-600">Appointment</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Reserve your spot and experience premium grooming
          </p>
        </div>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="pl-12 bg-black border-zinc-800 text-white focus:border-amber-600"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-black border-zinc-800 text-white focus:border-amber-600"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-black border-zinc-800 text-white focus:border-amber-600"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white">Service</Label>
                  <div className="relative">
                    <Scissors className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                    <Select 
                      value={formData.service}
                      onValueChange={(value) => setFormData({...formData, service: value})}
                      required
                    >
                      <SelectTrigger className="pl-12 bg-black border-zinc-800 text-white focus:border-amber-600">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800">
                        <SelectItem value="haircut" className="text-white">Classic Haircut</SelectItem>
                        <SelectItem value="beard" className="text-white">Beard Trim</SelectItem>
                        <SelectItem value="shave" className="text-white">Hot Towel Shave</SelectItem>
                        <SelectItem value="styling" className="text-white">Hair Wash & Styling</SelectItem>
                        <SelectItem value="package" className="text-white">Full Grooming Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="barber" className="text-white">Preferred Barber</Label>
                  <Select 
                    value={formData.barber}
                    onValueChange={(value) => setFormData({...formData, barber: value})}
                  >
                    <SelectTrigger className="bg-black border-zinc-800 text-white focus:border-amber-600">
                      <SelectValue placeholder="Any available" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      <SelectItem value="any" className="text-white">Any Available</SelectItem>
                      <SelectItem value="michael" className="text-white">Michael Rodriguez</SelectItem>
                      <SelectItem value="james" className="text-white">James Thompson</SelectItem>
                      <SelectItem value="david" className="text-white">David Chen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white">Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="pl-12 bg-black border-zinc-800 text-white focus:border-amber-600"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-white">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Select 
                      value={formData.time}
                      onValueChange={(value) => setFormData({...formData, time: value})}
                      required
                    >
                      <SelectTrigger className="pl-12 bg-black border-zinc-800 text-white focus:border-amber-600">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800">
                        <SelectItem value="09:00" className="text-white">9:00 AM</SelectItem>
                        <SelectItem value="10:00" className="text-white">10:00 AM</SelectItem>
                        <SelectItem value="11:00" className="text-white">11:00 AM</SelectItem>
                        <SelectItem value="12:00" className="text-white">12:00 PM</SelectItem>
                        <SelectItem value="13:00" className="text-white">1:00 PM</SelectItem>
                        <SelectItem value="14:00" className="text-white">2:00 PM</SelectItem>
                        <SelectItem value="15:00" className="text-white">3:00 PM</SelectItem>
                        <SelectItem value="16:00" className="text-white">4:00 PM</SelectItem>
                        <SelectItem value="17:00" className="text-white">5:00 PM</SelectItem>
                        <SelectItem value="18:00" className="text-white">6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg py-6"
              >
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
