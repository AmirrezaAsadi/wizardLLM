import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Wand2, Bell, Settings } from 'lucide-react';

export default function App() {
  const [devices] = useState([
    { id: 1, name: 'Living Room Light', status: 'On', type: 'Light' },
    { id: 2, name: 'Temperature Sensor', status: '72°F', type: 'Sensor' },
    { id: 3, name: 'Front Door', status: 'Locked', type: 'Lock' }
  ]);

  const [rules] = useState([
    { id: 1, name: 'Night Mode', condition: 'Time is after 10 PM', action: 'Turn off lights' },
    { id: 2, name: 'Morning Routine', condition: 'Time is 7 AM', action: 'Open blinds, turn on coffee maker' }
  ]);

  const [events] = useState([
    { id: 1, time: '10:30 AM', description: 'Front door unlocked', device: 'Front Door' },
    { id: 2, time: '11:15 AM', description: 'Temperature adjusted', device: 'Thermostat' }
  ]);

  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-[#B33F62] p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-[#EFD9CE] text-2xl font-bold">Wizard of LLMs</h1>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <Tabs defaultValue="devices" className="space-y-4">
          <TabsList className="grid grid-cols-4 gap-4 bg-white p-2">
            <TabsTrigger value="devices" className="flex items-center gap-2">
              <Home className="h-4 w-4" /> Devices
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex items-center gap-2">
              <Wand2 className="h-4 w-4" /> Rules
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Bell className="h-4 w-4" /> Events
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" /> Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="devices">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {devices.map(device => (
                <Card key={device.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Status: {device.status}</p>
                    <p className="text-gray-600">Type: {device.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rules">
            <div className="grid gap-4 md:grid-cols-2">
              {rules.map(rule => (
                <Card key={rule.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{rule.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">If: {rule.condition}</p>
                    <p className="text-gray-600">Then: {rule.action}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map(event => (
                    <div key={event.id} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">{event.description}</p>
                        <p className="text-sm text-gray-600">{event.device}</p>
                      </div>
                      <span className="text-sm text-gray-500">{event.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Configure your Wizard of LLMs settings here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}