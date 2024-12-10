import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  classText?: string;
}

const CardLayout = ({
  children,
  title,
  className = "",
  classText,
}: CardLayoutProps) => {
  return (
    <Card
      className={cn(
        "relative rounded-lg shadow-sm hover:shadow-md transition-shadow h-[400px] w-full",
        className
      )}
    >
      {title && (
        <CardHeader className="pb-4">
          <CardTitle
            className={cn("text-lg font-medium text-start", classText)}
          >
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="h-[calc(100%-4rem)] flex items-center justify-center">
        <div className="w-full h-full flex place-content-center">{children}</div>
      </CardContent>
    </Card>
  );
};

export default CardLayout;
