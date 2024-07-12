interface ParagraphProps {
  label: string;
  children: React.ReactNode;
}

const Paragraph = ({ label, children }: ParagraphProps) => (
  <div className="text-sm flex flex-wrap items-center">
    <span className="text-white mr-1 capitalize">{label}:</span>
    <span className="text-gray-300 flex-1">{children}</span>
  </div>
)

export default Paragraph;
