
import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth, isWeekend, getDay, add } from "date-fns";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

// Sample class schedule data
const classSchedule = [
  {
    id: 1,
    title: "Gentle Yin Flow",
    date: add(new Date(), { days: 1 }),
    time: "18:00 - 19:15",
    location: "Harmony Studio"
  },
  {
    id: 2,
    title: "Deep Stretch Yin",
    date: add(new Date(), { days: 3 }),
    time: "10:00 - 11:15",
    location: "Serenity Center"
  },
  {
    id: 3,
    title: "Yin & Meditation",
    date: add(new Date(), { days: 5 }),
    time: "19:30 - 20:45",
    location: "Harmony Studio"
  },
  {
    id: 4,
    title: "Restorative Yin",
    date: add(new Date(), { days: 8 }),
    time: "17:30 - 18:45",
    location: "Serenity Center"
  },
  {
    id: 5,
    title: "Morning Yin",
    date: add(new Date(), { days: 10 }),
    time: "08:00 - 09:15",
    location: "Harmony Studio"
  }
];

const Schedule = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Create array with empty cells for proper calendar grid alignment
  const startDay = getDay(monthStart);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  const nextMonth = () => {
    setCurrentMonth(add(currentMonth, { months: 1 }));
  };

  const prevMonth = () => {
    setCurrentMonth(add(currentMonth, { months: -1 }));
  };

  // Check if a class is scheduled on a specific date
  const getClassesForDate = (date) => {
    return classSchedule.filter(
      (event) => 
        event.date.getDate() === date.getDate() && 
        event.date.getMonth() === date.getMonth() && 
        event.date.getFullYear() === date.getFullYear()
    );
  };

  return (
    <section id="schedule" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-yin-text">Class Schedule</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join me for a transformative Yin Yoga experience. Classes are designed for all levels, 
            from beginners to advanced practitioners. Find a time that works for you and begin your journey to balance and wellness.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" size="sm" onClick={prevMonth}>
                <ChevronLeft size={20} />
              </Button>
              <h3 className="text-xl font-serif font-medium">
                {format(currentMonth, "MMMM yyyy")}
              </h3>
              <Button variant="ghost" size="sm" onClick={nextMonth}>
                <ChevronRight size={20} />
              </Button>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-medium text-gray-500 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {blanks.map((blank) => (
                <div key={`blank-${blank}`} className="h-20 p-1 bg-gray-50 rounded-md opacity-50"></div>
              ))}
              
              {days.map((day) => {
                const classes = getClassesForDate(day);
                const hasClass = classes.length > 0;
                
                return (
                  <div 
                    key={day.toString()}
                    className={cn(
                      "min-h-20 p-1 rounded-md relative border border-gray-100",
                      isToday(day) ? "bg-yin-light/50 border-yin" : "",
                      !isSameMonth(day, currentMonth) ? "opacity-50" : "",
                      isWeekend(day) ? "bg-gray-50" : "",
                      hasClass ? "ring-1 ring-yin" : ""
                    )}
                  >
                    <div className="text-right font-medium text-sm mb-1 p-1">
                      {format(day, "d")}
                    </div>
                    
                    {hasClass && (
                      <div className="px-1">
                        {classes.map((classEvent) => (
                          <div 
                            key={classEvent.id}
                            className="calendar-event text-xs cursor-pointer"
                            onClick={() => setSelectedEvent(classEvent)}
                          >
                            <div className="font-medium text-yin-deep truncate">{classEvent.title}</div>
                            <div className="text-gray-600 truncate">{classEvent.time}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Legend and Info */}
          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yin-light border border-yin"></div>
                <span className="text-sm text-gray-700">Today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-yin/20 border border-yin"></div>
                <span className="text-sm text-gray-700">Class Scheduled</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <CalendarIcon size={16} className="text-yin" />
                Click on a class to see details
              </div>
              <Button 
                size="sm" 
                className="bg-yin hover:bg-yin-dark text-white"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Class
              </Button>
            </div>
          </div>
        </div>
        
        {/* Selected Event Details */}
        {selectedEvent && (
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden animate-fade-in">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-yin-text">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-gray-700">
                    {format(selectedEvent.date, "EEEE, MMMM d, yyyy")}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedEvent(null)}
                >
                  <X size={18} />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{selectedEvent.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{selectedEvent.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available Spots</p>
                  <p className="font-medium">8</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  className="bg-yin hover:bg-yin-dark text-white"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Reserve Your Spot
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Schedule;
