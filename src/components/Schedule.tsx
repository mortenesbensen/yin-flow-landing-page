
import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth, isWeekend, getDay, add, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, X, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Types for our data
interface ClassType {
  id: string;
  title: string;
  description: string;
  location: string;
}

interface ClassTime {
  id: string;
  class_id: string;
  date: string;
  start_time: string;
  end_time: string;
  available_spots: number;
  class: ClassType; // Joined class data
}

const Schedule = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<ClassTime | null>(null);
  const [classSchedule, setClassSchedule] = useState<ClassTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Create array with empty cells for proper calendar grid alignment
  const startDay = getDay(monthStart);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  // Fetch class data from Supabase
  useEffect(() => {
    const fetchClassData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Query class times for the current month with joined class data
        const startDate = startOfMonth(currentMonth).toISOString();
        const endDate = endOfMonth(currentMonth).toISOString();
        
        const { data, error } = await supabase
          .from('class_times')
          .select(`
            id,
            class_id,
            date,
            start_time,
            end_time,
            available_spots,
            class:classes(id, title, description, location)
          `)
          .gte('date', startDate)
          .lte('date', endDate)
          .order('date', { ascending: true });
          
        if (error) throw error;
        
        // Transform the data for our component
        const formattedData = data.map(item => ({
          ...item,
          class: item.class as ClassType
        }));
        
        setClassSchedule(formattedData);
      } catch (err) {
        console.error('Error fetching class data:', err);
        setError('Could not load class schedule. Please try again later.');
        toast.error('Failed to load class schedule');
      } finally {
        setLoading(false);
      }
    };
    
    fetchClassData();
  }, [currentMonth]);

  const nextMonth = () => {
    setCurrentMonth(add(currentMonth, { months: 1 }));
  };

  const prevMonth = () => {
    setCurrentMonth(add(currentMonth, { months: -1 }));
  };

  // Check if a class is scheduled on a specific date
  const getClassesForDate = (date: Date) => {
    return classSchedule.filter(event => {
      const eventDate = parseISO(event.date);
      return (
        eventDate.getDate() === date.getDate() && 
        eventDate.getMonth() === date.getMonth() && 
        eventDate.getFullYear() === date.getFullYear()
      );
    });
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
            
            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-yin" />
                <span className="ml-2 text-yin">Loading schedule...</span>
              </div>
            )}
            
            {/* Error State */}
            {error && !loading && (
              <div className="text-center py-10">
                <p className="text-red-500 mb-4">{error}</p>
                <Button 
                  onClick={() => window.location.reload()}
                  variant="outline"
                >
                  Try Again
                </Button>
              </div>
            )}
            
            {/* Calendar Grid */}
            {!loading && !error && (
              <>
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
                                className="calendar-event text-xs cursor-pointer hover:bg-yin-light/20 p-1 rounded"
                                onClick={() => setSelectedEvent(classEvent)}
                              >
                                <div className="font-medium text-yin-deep truncate">{classEvent.class.title}</div>
                                <div className="text-gray-600 truncate">{classEvent.start_time} - {classEvent.end_time}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
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
                    {selectedEvent.class.title}
                  </h3>
                  <p className="text-gray-700">
                    {format(parseISO(selectedEvent.date), "EEEE, MMMM d, yyyy")}
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
                  <p className="font-medium">{selectedEvent.start_time} - {selectedEvent.end_time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{selectedEvent.class.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available Spots</p>
                  <p className="font-medium">{selectedEvent.available_spots}</p>
                </div>
              </div>
              
              {selectedEvent.class.description && (
                <div className="mb-6">
                  <p className="text-sm text-gray-500">Description</p>
                  <p className="text-gray-700">{selectedEvent.class.description}</p>
                </div>
              )}
              
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
