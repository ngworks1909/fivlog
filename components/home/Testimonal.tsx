import { Card, CardContent } from '../ui/card'

export default function Testimonal() {
  return (
    <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-8 text-center">
                  <p className="text-lg mb-4">
                    {`"Working with this company has been an absolute pleasure. Their team's expertise and dedication have
                    significantly improved our online presence and business operations."`}
                  </p>
                  <p className="font-semibold">- Jane Doe, CEO of TechCorp</p>
                </CardContent>
              </Card>
            </div>
          </div>
    </section>
  )
}
