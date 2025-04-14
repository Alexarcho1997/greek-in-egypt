
'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { formatDistanceToNow } from 'date-fns';

export default function CairoTripHub() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const tripDate = new Date('2025-04-23T17:05:00');
    const interval = setInterval(() => {
      setCountdown(formatDistanceToNow(tripDate, { addSuffix: true }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">🇬🇷 Greek in Egypt 🇪🇬</h1>
      <p className="text-center text-sm text-gray-500">Let the countdown begin: <strong>{countdown}</strong></p>

      <img src="/starter-pack.jpg" alt="Starter Pack" className="rounded-xl shadow-md mx-auto" />

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">✈️ Flights</h2>
          <img src="/flight.jpg" alt="Flight Ticket" className="rounded-md" />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">🏠 Airbnb Details</h2>
          <p>Panoramic Duplex APT - 3BR - Zamalek</p>
          <p><strong>Check-in:</strong> Apr 23, 3:00 PM</p>
          <p><strong>Checkout:</strong> Apr 29, 12:00 PM</p>
          <p><strong>Guests:</strong> 6 (Full Squad)</p>
          <p><strong>Confirmation Code:</strong> HM2FA8A929</p>
          <a href="https://www.airbnb.com/rooms/1369532043510350510" className="text-blue-600 underline" target="_blank">Open Airbnb Listing</a>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">💡 Travel Tips</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Bring hat 🧢, sunglasses 🕶️ and sunscreen ☀️</li>
            <li>🚱 Water in Egypt is NOT drinkable – even for brushing teeth</li>
            <li>💵 Tipping is expected – 1€ is considered generous</li>
            <li>🛂 Bring your passport – Visa on arrival is €25</li>
            <li>🍻 No alcohol in public – Festival is an exception</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">🎉 Zamna Festival</h2>
          <p>We're heading to the Pyramids for 2 epic nights of music & magic.</p>
          <p><em>🎟️ Tickets will be added soon.</em></p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-3">
          <h2 className="text-xl font-semibold">📅 Itinerary</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><strong>Apr 23 (Wed):</strong> ✈️ Arrival in Cairo, Airbnb check-in, dinner at <a className="text-blue-600 underline" href="https://www.pier88group.com/" target="_blank">Pier 88</a> at 22:00 🍽️</li>
            <li><strong>Apr 24 (Thu):</strong> 🍳 Brunch at <a className="text-blue-600 underline" href="https://khufuscairo.com/" target="_blank">Khufu's</a> at 10:30, Giza tour 🔺🐪, dinner at <a className="text-blue-600 underline" href="https://www.kempinski.com/en/cairo/nile-hotel/restaurants-and-bars/kebabgy/" target="_blank">Kebabgy</a> at 22:00</li>
            <li><strong>Apr 25 (Fri):</strong> 🕌 Islamic Cairo tour + Surf & Turf lunch at <a className="text-blue-600 underline" href="https://crimsonbarandgrill.com/" target="_blank">Crimson Zamalek</a> at 16:00, 🎉 Zamna night 1</li>
            <li><strong>Apr 26 (Sat):</strong> 😴 Chill day, lunch wherever 🍽️, 🎶 Zamna night 2</li>
            <li><strong>Apr 27 (Sun):</strong> 🧘 Relax day, lunch & dinner free choice 🍕, optional Nile cruise 🚢</li>
            <li><strong>Apr 28 (Mon):</strong> 🚌 Alexandria Tour (Catacombs, Library, Roman Theatre)</li>
            <li><strong>Apr 29 (Tue):</strong> ✈️ Airport transfer + final lunch (open choice) 🍲</li>
          </ul>
        </CardContent>
      </Card>

      <Button className="w-full">🚀 LET'S GO!</Button>
    </div>
  );
}
