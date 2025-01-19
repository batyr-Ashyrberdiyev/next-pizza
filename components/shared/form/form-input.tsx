import { Input } from '@/components/ui';
import { FC } from 'react';

interface Props {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<Props> = ({ className, name, label, required, ...props }) => {
  return (
    <div className={className}>
      {label && (
        <p className="font-medium ">
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...props} />
      </div>
    </div>
  );
};
