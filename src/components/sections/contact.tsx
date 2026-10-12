'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Mail, MapPin, Clock, CheckCircle2, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PROFILE } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/sections/section-heading'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  projectType: z.string().min(1, 'Select a project type'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Tell me a bit more (min 10 chars)'),
})

type FormValues = z.infer<typeof schema>

const PROJECT_TYPES = [
  'Smart contracts & VM-executor',
  'Smart contract (Rust)',
  'SDK / tooling',
  'Explorer / infra',
  'Full-stack web app',
  'Devnet / testing',
  'Other',
]

export function Contact() {
  const [submitting, setSubmitting] = React.useState(false)
  const [sent, setSent] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: '',
    },
  })

  const projectType = watch('projectType')

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true)
    try {
      const subject = encodeURIComponent(
        `Project Inquiry: ${values.projectType || 'General'} — from ${values.name}`
      )
      const body = encodeURIComponent(
        `Hi Layavardhan,\n\nName: ${values.name}\nEmail: ${values.email}\nProject Type: ${values.projectType}\nBudget: ${values.budget || 'Not specified'}\n\nMessage:\n${values.message}`
      )
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
      toast.success('Inquiry ready in email client!', {
        description: `Sending directly to ${PROFILE.email}`,
      })
      setSent(true)
      reset()
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      toast.error('Could not open email client', {
        description: `Please write directly to ${PROFILE.email}`,
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/60 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 size-[400px] rounded-full bg-amber-400/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="06 / Contact"
              title="Let's build onchain."
              description="Have a smart contract, vm-executor, or infra piece that needs work? Tell me about it."
            />

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Email
                  </span>
                  <span className="font-medium group-hover:text-primary">
                    {PROFILE.email}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Location
                  </span>
                  <span className="font-medium">{PROFILE.location}</span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Response time
                  </span>
                  <span className="font-medium">Within 24 hours</span>
                </span>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {PROFILE.availability}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <Input
                    placeholder="Jane Doe"
                    className="h-11 bg-background/60"
                    {...register('name')}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <Input
                    type="email"
                    placeholder="jane@example.com"
                    className="h-11 bg-background/60"
                    {...register('email')}
                  />
                </Field>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Project type" error={errors.projectType?.message}>
                  <Select
                    value={projectType}
                    onValueChange={(v) => setValue('projectType', v, { shouldValidate: true })}
                  >
                    <SelectTrigger className="h-11 bg-background/60">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROJECT_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Budget (optional)">
                  <Input
                    placeholder="$10k – $50k"
                    className="h-11 bg-background/60"
                    {...register('budget')}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" error={errors.message?.message}>
                  <Textarea
                    rows={5}
                    placeholder="Tell me about your smart contract, timeline, and what you're trying to ship..."
                    className="resize-none bg-background/60"
                    {...register('message')}
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  By sending you agree to be contacted about your enquiry.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="min-w-[150px] rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle2 className="size-4" />
                      Sent!
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="size-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <Label className="mb-2 block text-sm font-medium">{label}</Label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-destructive">{error}</p>
      )}
    </div>
  )
}
