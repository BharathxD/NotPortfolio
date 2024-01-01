import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

interface Props extends React.PropsWithChildren {
  icon?: string;
  title?: string;
}

const Callout = ({ title, children, icon, ...props }: Props) => {
  return (
    <Alert {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default Callout;
