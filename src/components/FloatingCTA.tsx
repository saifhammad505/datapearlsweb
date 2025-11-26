import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "./ConsultationDialog";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <ConsultationDialog>
        <Button
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-shadow h-14 w-14 sm:h-auto sm:w-auto sm:px-6"
        >
          <MessageSquare className="h-6 w-6 sm:mr-2" />
          <span className="hidden sm:inline">Get Started</span>
        </Button>
      </ConsultationDialog>
    </motion.div>
  );
};

export default FloatingCTA;
