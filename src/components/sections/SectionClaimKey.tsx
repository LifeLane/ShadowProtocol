
"use client"

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Loader2, Send, Wallet, Mail, KeyRound, AlertTriangle } from "lucide-react"

import AnimatedSection from "@/components/common/AnimatedSection"
import Terminal from "@/components/common/Terminal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const FormSchema = z.object({
  telegram: z.string().min(5, { message: "Telegram handle must be at least 5 characters." }).refine(val => val.startsWith('@'), { message: "Handle must start with @" }),
  wallet: z.string().min(32, { message: "Please enter a valid Solana wallet address." }).max(44, { message: "Please enter a valid Solana wallet address." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
})

type FormValues = z.infer<typeof FormSchema>

const SectionClaimKey = () => {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      telegram: "",
      wallet: "",
      email: "",
    },
  })

  const { register, handleSubmit, formState: { errors }, trigger } = form

  const nextStep = async (field?: keyof FormValues) => {
    if (field) {
      const isValid = await trigger(field)
      if (!isValid) return
    }
    setStep(s => s + 1)
  }

  const prevStep = () => setStep(s => s - 1)

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsLoading(false)
    setIsSuccess(true)
    toast({
      title: "Claim Submitted",
      description: "Your entry for the SHADOW Genesis Offering has been recorded.",
    })
  }

  const steps = [
    { id: 1, title: "Authorize Comms Link", field: "telegram", icon: Send, placeholder: "@username" },
    { id: 2, title: "Verify Wallet ID", field: "wallet", icon: Wallet, placeholder: "Solana Wallet Address" },
    { id: 3, title: "Secure Backup Channel", field: "email", icon: Mail, placeholder: "operator@domain.com" },
  ]

  const currentStepData = steps.find(s => s.id === step)

  return (
    <AnimatedSection id="claim-key" animationClassName="bg-matrix-drift-pattern">
      <Terminal title="SECURE_AIRDROP_CONSOLE.exe" className="w-full max-w-2xl animate-border-glow">
        <div className="p-4 md:p-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent glow-accent mb-2">Join the Genesis Offering</h2>
          <p className="text-muted-foreground mb-8">Secure your SHADOW allocation. Complete the three-step verification process.</p>
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Progress Bar */}
                <div className="flex justify-between items-center px-1 sm:px-4">
                  {steps.map((s, index) => (
                    <div key={s.id} className={cn("flex-1 flex items-center", index === 0 ? "justify-start" : index === steps.length - 1 ? "justify-end" : "justify-center" )}>
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= s.id ? 'border-primary' : 'border-muted'}`}>
                           {step > s.id ? <Check className="w-5 h-5 text-primary" /> : <s.icon className={`w-5 h-5 ${step >= s.id ? 'text-primary' : 'text-muted'}`} />}
                       </div>
                       {index < steps.length - 1 && <div className={`h-0.5 flex-1 mx-2 ${step > s.id ? 'bg-primary' : 'bg-muted'}`}></div>}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {steps.map(s => s.id === step && (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <Label htmlFor={s.field} className="text-lg text-primary glow">{s.title}</Label>
                      <Input
                        id={s.field}
                        {...register(s.field as keyof FormValues)}
                        placeholder={s.placeholder}
                        className="bg-black/30 border-primary/30 h-12 text-center text-lg"
                      />
                      {errors[s.field as keyof FormValues] && <p className="text-destructive text-sm flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4" /> {errors[s.field as keyof FormValues]?.message}</p>}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <div className="flex justify-center gap-4 pt-4">
                  {step > 1 && <Button type="button" variant="outline" onClick={prevStep} className="glow">Previous</Button>}
                  {step < steps.length && <Button type="button" onClick={() => nextStep(currentStepData?.field as keyof FormValues)} className="btn-shine">Next</Button>}
                  {step === steps.length && (
                    <Button type="submit" disabled={isLoading} className="btn-shine glow w-48">
                      {isLoading ? <Loader2 className="animate-spin" /> : <><KeyRound /> Finalize Claim</>}
                    </Button>
                  )}
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 text-center h-48"
              >
                 <Check className="w-16 h-16 text-primary bg-primary/10 rounded-full p-2" />
                 <h3 className="text-2xl font-bold text-primary glow">Claim Authorized</h3>
                 <p className="text-muted-foreground">Welcome to the SHADOW protocol, operative. Stand by for further instructions.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Terminal>
    </AnimatedSection>
  )
}

export default SectionClaimKey
