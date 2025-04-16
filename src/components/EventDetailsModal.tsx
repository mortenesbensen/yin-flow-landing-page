
import { format, parseISO } from "date-fns";
import { da } from 'date-fns/locale/da';
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "./ui/dialog";
import { ClassTime } from "@/types/yoga";

interface EventDetailsModalProps {
  event: ClassTime | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventDetailsModal = ({ event, isOpen, onClose }: EventDetailsModalProps) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif text-yin-text">
            {event.class.title}
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4" onClick={onClose}>
            <X size={18} className="text-gray-500 hover:text-gray-700" />
          </DialogClose>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-gray-700 mb-4">
            {format(parseISO(event.date), "EEEE, d. MMMM yyyy", { locale: da })}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Tidspunkt</p>
              <p className="font-medium">{event.start_time} - {event.end_time}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Lokation</p>
              <p className="font-medium">{event.class.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Ledige pladser</p>
              <p className="font-medium">{event.available_spots}</p>
            </div>
          </div>
          
          {event.class.description && (
            <div className="mb-4">
              <p className="text-sm text-gray-500">Beskrivelse</p>
              <p className="text-gray-700">{event.class.description}</p>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button 
            className="bg-yin hover:bg-yin-dark text-white w-full"
            onClick={() => {
              onClose();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reserver din plads
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
