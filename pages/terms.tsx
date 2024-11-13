import DefaultLayout from "@/layouts/default";
import TermsContent from "@/components/Terms/TermsContent";

export default function TermsPage() {
  return (
    <DefaultLayout>
      <div className="relative">
        <TermsContent />
      </div>
    </DefaultLayout>
  );
}
