import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Home Section */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Anas Haddad</h1>
        <p>English Teacher | Graphic Designer | Photographer</p>
        <p className="text-gray-600">Tangier, Morocco</p>
        <Button className="mt-2">Download CV</Button>
      </section>

      {/* About Me */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          Passionate and creative English teacher with experience teaching both primary and middle school students. I integrate modern,
          play-based approaches in class and support my school with photography, montage, and social media content.
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Annex 1 Private School (2023 – Present)</h3>
              <p>English Teacher – Primary School</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Al Nahda School (2023 – Present)</h3>
              <p>English Teacher – Middle School</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Previous Private School (2023 – 2024)</h3>
              <p>English Teacher – Middle School</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Freelancer (2015 – 2020)</h3>
              <p>Graphic Design, Photography, Video Montage, Social Media Management, IT Support</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>English Language Teaching & Play-Based Learning</li>
          <li>Graphic Design (Photoshop, Illustrator, Canva)</li>
          <li>Photography & Video Editing</li>
          <li>Social Media Management</li>
          <li>IT Troubleshooting & Software Installation</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Feel free to reach out to me for collaborations or opportunities!</p>
        <div className="flex justify-center space-x-4">
          <Mail className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
        </div>
      </section>
    </div>
  );
}
