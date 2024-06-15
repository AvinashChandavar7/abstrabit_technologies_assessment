import React from 'react';

interface CalendarItem {
  year: number;
  months: string[];
  color: string;
}

const calendarItems: CalendarItem[] = [
  { year: 2024, months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], color: "#F0EFFF" },
  { year: 2025, months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], color: "#F1F6E5" },
  { year: 2026, months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], color: "#FEF5E7" }
];


const fdItems = [
  { title: "Utkarsh FD 1", color: "#3B39D9", timeline: { startYear: 2024, startMonth: "J", endYear: 2024, endMonth: "D" } },
  { title: "Shriram FD Plan 2", color: "#3B39D9", timeline: { startYear: 2024, startMonth: "J", endYear: 2025, endMonth: "A" } },
  { title: "Bajaj Finserv FD 1", color: "#3B39D9", timeline: { startYear: 2024, startMonth: "M", endYear: 2025, endMonth: "A" } },
  { title: "Mahindra FD Plan 2", color: "#3B39D9", timeline: { startYear: 2024, startMonth: "J", endYear: 2026, endMonth: "J" } }
];

const getMonthIndex = (month: string) => {
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return months.indexOf(month);
};

const getYearMonthIndex = (year: number, month: string) => {
  const baseYear = calendarItems[0].year;
  const yearIndex = year - baseYear;
  return yearIndex * 12 + getMonthIndex(month);
};

const FDTimeline: React.FC = () => {
  const totalMonths = calendarItems.length * 12;

  return (
    <div className="relative w-[822px] h-[286px] p-4 ">
      <h1 className="mb-4 text-2xl font-bold">FD Maturity Timeline</h1>

      <div className="relative w-full border">

        {/* Horizontal timeline grid */}

        <div className="flex w-full overflow-hidden overflow-x-scroll ">
          {calendarItems.map((item) => (
            <React.Fragment key={item.year}>
              <div className="flex flex-col w-full ">
                <div className="text-lg font-semibold text-center text-gray-600">{item.year}</div>
                <div className="flex ">
                  {item.months.map((month) => (
                    <div
                      key={`${item.year}-${month}`}
                      className="w-full py-1 text-center border h-52"
                      style={{ backgroundColor: item.color, flex: '0 0 calc(100% / 12)' }}
                    >
                      {month}

                      {/* FD Bars */}
                      {fdItems.map((fd, fdIndex) => {
                        const startIndex = getYearMonthIndex(fd.timeline.startYear, fd.timeline.startMonth);
                        const endIndex = getYearMonthIndex(fd.timeline.endYear, fd.timeline.endMonth);
                        const spanLength = endIndex - startIndex + 1;
                        return (
                          <div
                            key={fdIndex}
                            className="absolute flex items-center h-6 bg-[#3B39D9] rounded-full top-5"
                            style={{
                              left: `${(startIndex / totalMonths) * 100}%`,
                              width: `${(spanLength / totalMonths) * 100}%`,
                              marginTop: `${60 + fdIndex * 30}px`
                            }}
                          >
                            <span className="ml-2 text-white">{fd.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FDTimeline;
