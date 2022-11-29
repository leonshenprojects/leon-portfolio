import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "./ResumeSection.module.scss";

interface ResumeSectionProps {
  children: React.ReactNode;
  onSetHeight: (height: number) => void;
}

const ResumeSection: FunctionComponent<ResumeSectionProps> = ({
  children,
  onSetHeight,
}) => {
  const [height, setHeight] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (!ref.current) return;

    setHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    console.log("ENTERED!", height, !!height);
    if (!height) return;

    onSetHeight(height);
  }, [height, onSetHeight]);

  return (
    <div ref={ref} className={styles.section}>
      {children}
    </div>
  );
};

export default ResumeSection;
