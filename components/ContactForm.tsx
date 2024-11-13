import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ContactFormProps {
  variant?: "light" | "dark";
}

interface FormData {
  fullName: string;
  subject: string;
  phone: string;
  message: string;
  acceptTerms: boolean;
}

export const ContactForm = ({ variant = "light" }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    subject: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (!formData.acceptTerms) {
      setError("Please accept the terms and conditions");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://thccbdbuzz.xyz/support/questions_and_suggestions/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: formData.fullName,
            subject: formData.subject,
            phone_number: formData.phone,
            message: formData.message,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(data.message);
      setFormData({
        fullName: "",
        subject: "",
        phone: "",
        message: "",
        acceptTerms: false,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md">{error}</div>
      )}
      {success && (
        <div className="p-3 bg-green-100 text-green-700 rounded-md">
          {success}
        </div>
      )}

      <div className="relative">
        <span className="text-red-500 absolute -top-2 left-0">*</span>
        <Input
          value={formData.fullName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
          }
          classNames={{
            input: "bg-muted_light text-black rounded-md h-12 border-gray-200",
            inputWrapper: "bg-muted_light rounded-md h-12 border-gray-200 mt-4",
          }}
          placeholder="Enter your full name"
          variant="bordered"
          required
        />
      </div>

      <div className="relative">
        <span className="text-red-500 absolute -top-2 left-0">*</span>
        <Input
          value={formData.subject}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, subject: e.target.value }))
          }
          classNames={{
            input: "bg-muted_light text-black rounded-md h-12 border-gray-200",
            inputWrapper: "bg-muted_light rounded-md h-12 border-gray-200 mt-4",
          }}
          placeholder="Enter subject"
          variant="bordered"
          required
        />
      </div>

      <div className="relative">
        <span className="text-red-500 absolute -top-2 left-0">*</span>
        <Input
          value={formData.phone}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, phone: e.target.value }))
          }
          classNames={{
            input:
              "bg-muted_light text-black rounded-md h-12 pl-12 border-gray-200",
            inputWrapper: "bg-muted_light rounded-md h-12 border-gray-200 mt-4",
          }}
          placeholder="-- -- --"
          startContent={
            <div className="flex items-center absolute left-3">
              <span className="text-white">+1</span>
            </div>
          }
          variant="bordered"
          required
        />
      </div>

      <div className="relative">
        <span className="text-red-500 absolute -top-2 left-0">*</span>
        <Textarea
          value={formData.message}
          classNames={{
            input: "bg-muted_light text-black rounded-md border-gray-200",
            inputWrapper:
              "bg-muted_light rounded-md min-h-[120px] border-gray-200 mt-4",
          }}
          placeholder="Enter your message"
          variant="bordered"
          required
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          classNames={{
            label:
              variant === "dark"
                ? "text-white/80 text-sm"
                : "text-default-500 text-sm",
          }}
          isSelected={formData.acceptTerms}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, acceptTerms: value }))
          }
        >
          I have read, understood and agree to the Weede{" "}
          <Link
            href="/terms"
            className={variant === "dark" ? "text-white" : "text-primary"}
          >
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className={variant === "dark" ? "text-white" : "text-primary"}
          >
            Privacy Policy
          </Link>
          .
        </Checkbox>
      </div>

      <Button
        className={`w-full rounded-md h-12 ${
          variant === "dark"
            ? "bg-white text-primary hover:bg-white/90"
            : "bg-primary text-white hover:bg-primary/90"
        }`}
        isLoading={isLoading}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </form>
  );
};
