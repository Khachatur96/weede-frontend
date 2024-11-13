interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

export const ContactItem = ({ icon, text, link }: ContactItemProps) => {
  const content = (
    <div className="flex items-center gap-4">
      <span className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
        {icon}
      </span>
      <span className="text-gray-600">{text}</span>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
};
