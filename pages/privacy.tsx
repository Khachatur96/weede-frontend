import DefaultLayout from "@/layouts/default";
import PrivacyContent from "@/components/Privacy/PrivacyContent";

export default function PrivacyPage() {
  return (
    <DefaultLayout>
      <div className="relative">
        <PrivacyContent />
      </div>
    </DefaultLayout>
  );
}
