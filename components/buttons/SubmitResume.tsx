"use client"
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import { Upload } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"


export default function SubmitResume() {
const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {toast} = useToast()
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('resume', file)

    try {
      const response = await fetch('https://getform.io/f/arolvoqb', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        toast({
          title: "Resume submitted successfully",
          description: "We'll review your application and get back to you soon.",
        })
      } else {
        throw new Error('Failed to submit resume')
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error submitting resume",
        description: "Please try again later or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <>
      <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
          <Button
            size="lg"
            onClick={() => fileInputRef.current?.click()}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Upload className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Submit Your Resume
              </>
            )}
          </Button>
    </>
  )
}
