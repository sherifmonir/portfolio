// components/ResumeButton.tsx
type ResumeButtonProps = {
  className?: string;
};

const ResumeButton = ({ className = '' }: ResumeButtonProps) => {
  return (
    <a
      href="/Sherif_Monir_Frontend_Developer_Resume.pdf"
      download="Sherif_Monir_Frontend_Developer_Resume.pdf"
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 ${className}`}
    />
     
    
  );
};

export default ResumeButton;