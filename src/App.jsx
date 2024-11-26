// src/App.jsx
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Home, Users, ScrollText, Activity } from 'lucide-react'

export default function App() {
  const [activeTab, setActiveTab] = useState('devices')

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#B33F62] p-4">
        <h1 className="text-[#EFD9CE] text-2xl font-bold">Wizard of LLMs</h1>
      </nav>

      <main className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>AI Assistant Control Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="assistants" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Assistants
                </TabsTrigger>
                <TabsTrigger value="prompts" className="flex items-center gap-2">
                  <ScrollText className="h-4 w-4" />
                  Prompts
                </TabsTrigger>
                <TabsTrigger value="people" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  People
                </TabsTrigger>
                <TabsTrigger value="conversations" className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Conversations
                </TabsTrigger>
              </TabsList>

              <TabsContent value="assistants">
                <AssistantsList />
              </TabsContent>
              <TabsContent value="prompts">
                <PromptsList />
              </TabsContent>
              <TabsContent value="people">
                <PeopleList />
              </TabsContent>
              <TabsContent value="conversations">
                <ConversationsList />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

// Basic list components
function AssistantsList() {
  const assistants = [
    { id: 1, name: 'Claude', type: 'General Purpose', status: 'Active' },
    { id: 2, name: 'GPT-4', type: 'Analysis', status: 'Active' },
    { id: 3, name: 'DALL-E', type: 'Image Generation', status: 'Inactive' }
  ]
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {assistants.map(assistant => (
        <Card key={assistant.id}>
          <CardHeader>
            <CardTitle>{assistant.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Type: {assistant.type}</p>
            <p>Status: {assistant.status}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function PromptsList() {
  const prompts = [
    { id: 1, title: 'Analysis Template', category: 'Business' },
    { id: 2, title: 'Creative Writing', category: 'Content' },
    { id: 3, title: 'Code Review', category: 'Development' }
  ]
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {prompts.map(prompt => (
        <Card key={prompt.id}>
          <CardHeader>
            <CardTitle>{prompt.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Category: {prompt.category}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function PeopleList() {
  const people = [
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' },
    { id: 3, name: 'Bob Wilson', role: 'Developer' }
  ]
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {people.map(person => (
        <Card key={person.id}>
          <CardHeader>
            <CardTitle>{person.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Role: {person.role}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ConversationsList() {
  const conversations = [
    { id: 1, title: 'Project Analysis', assistant: 'Claude', date: '2024-11-26' },
    { id: 2, title: 'Code Review', assistant: 'GPT-4', date: '2024-11-26' },
    { id: 3, title: 'Content Creation', assistant: 'Claude', date: '2024-11-25' }
  ]
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {conversations.map(conversation => (
        <Card key={conversation.id}>
          <CardHeader>
            <CardTitle>{conversation.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Assistant: {conversation.assistant}</p>
            <p>Date: {conversation.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}