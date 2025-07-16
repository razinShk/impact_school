
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, FileText, MessageSquare, Clock, Download, Eye } from 'lucide-react';
import { User } from '@/pages/Index';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatsCard } from '@/components/common/StatsCard';

interface StudentDashboardProps {
  user: User;
  onLogout: () => void;
}

export const StudentDashboard = ({ user, onLogout }: StudentDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    { title: 'Attendance', value: '95%', icon: Calendar, color: 'bg-green-500' },
    { title: 'Assignments', value: '8/10', icon: FileText, color: 'bg-blue-500' },
    { title: 'Messages', value: '3', icon: MessageSquare, color: 'bg-purple-500' },
    { title: 'Next Class', value: '2h 30m', icon: Clock, color: 'bg-orange-500' },
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'homework', label: 'Homework', icon: FileText },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  // Sample data
  const attendanceHistory = [
    { date: '2024-01-15', status: 'Present', subjects: ['Math', 'Physics', 'English', 'Chemistry'] },
    { date: '2024-01-14', status: 'Present', subjects: ['Math', 'Physics', 'English', 'Chemistry'] },
    { date: '2024-01-13', status: 'Absent', subjects: ['Math', 'Physics', 'English', 'Chemistry'] },
    { date: '2024-01-12', status: 'Present', subjects: ['Math', 'Physics', 'English', 'Chemistry'] },
    { date: '2024-01-11', status: 'Late', subjects: ['Math', 'Physics', 'English', 'Chemistry'] },
  ];

  const homeworkAssignments = [
    { 
      id: 1, 
      subject: 'Mathematics', 
      title: 'Chapter 5 Exercises', 
      dueDate: '2024-01-20', 
      status: 'Pending',
      description: 'Complete exercises 1-15 from Chapter 5: Quadratic Equations'
    },
    { 
      id: 2, 
      subject: 'Physics', 
      title: 'Lab Report - Pendulum', 
      dueDate: '2024-01-18', 
      status: 'Submitted',
      description: 'Write a detailed report on the simple pendulum experiment'
    },
    { 
      id: 3, 
      subject: 'English', 
      title: 'Essay on Climate Change', 
      dueDate: '2024-01-25', 
      status: 'Pending',
      description: 'Write a 500-word essay on the impact of climate change'
    },
    { 
      id: 4, 
      subject: 'Chemistry', 
      title: 'Chemical Equations Worksheet', 
      dueDate: '2024-01-22', 
      status: 'Graded',
      description: 'Balance the chemical equations in the provided worksheet',
      grade: 'A-'
    },
  ];

  const timetable = {
    'Monday': [
      { time: '9:00-10:00', subject: 'Mathematics', teacher: 'Mrs. Wilson', room: '101' },
      { time: '10:00-11:00', subject: 'Physics', teacher: 'Mr. Johnson', room: 'Lab 2' },
      { time: '11:30-12:30', subject: 'English', teacher: 'Ms. Davis', room: '203' },
      { time: '1:30-2:30', subject: 'Chemistry', teacher: 'Dr. Brown', room: 'Lab 1' },
    ],
    'Tuesday': [
      { time: '9:00-10:00', subject: 'Chemistry', teacher: 'Dr. Brown', room: 'Lab 1' },
      { time: '10:00-11:00', subject: 'Mathematics', teacher: 'Mrs. Wilson', room: '101' },
      { time: '11:30-12:30', subject: 'Physical Education', teacher: 'Mr. Smith', room: 'Gym' },
      { time: '1:30-2:30', subject: 'History', teacher: 'Ms. Taylor', room: '205' },
    ],
    'Wednesday': [
      { time: '9:00-10:00', subject: 'Physics', teacher: 'Mr. Johnson', room: 'Lab 2' },
      { time: '10:00-11:00', subject: 'English', teacher: 'Ms. Davis', room: '203' },
      { time: '11:30-12:30', subject: 'Mathematics', teacher: 'Mrs. Wilson', room: '101' },
      { time: '1:30-2:30', subject: 'Biology', teacher: 'Dr. Lee', room: 'Lab 3' },
    ],
  };

  const messages = [
    { id: 1, from: 'Mrs. Wilson (Math Teacher)', subject: 'Assignment Reminder', time: '2 hours ago', unread: true },
    { id: 2, from: 'School Admin', subject: 'Holiday Notice', time: '1 day ago', unread: false },
    { id: 3, from: 'Mr. Johnson (Physics)', subject: 'Lab Safety Guidelines', time: '2 days ago', unread: false },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                  <CardDescription>Your classes for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {timetable.Monday.map((classItem, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium">{classItem.subject}</p>
                          <p className="text-sm text-gray-600">{classItem.teacher} - {classItem.room}</p>
                        </div>
                        <span className="text-sm font-medium">{classItem.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pending Homework</CardTitle>
                  <CardDescription>Assignments due soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {homeworkAssignments.filter(hw => hw.status === 'Pending').map((homework) => (
                      <div key={homework.id} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{homework.subject}: {homework.title}</p>
                            <p className="text-xs text-gray-600 mt-1">{homework.description}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            new Date(homework.dueDate) <= new Date(Date.now() + 86400000) 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            Due: {homework.dueDate}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Latest updates from teachers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {messages.slice(0, 3).map((message) => (
                      <div key={message.id} className={`p-3 border rounded-lg ${message.unread ? 'bg-blue-50 border-blue-200' : ''}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-sm">{message.from}</p>
                            <p className="text-sm text-gray-600">{message.subject}</p>
                          </div>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">View All Messages</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                  <CardDescription>Your recent grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mathematics</span>
                      <span className="font-medium text-green-600">A</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Physics</span>
                      <span className="font-medium text-green-600">A-</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Chemistry</span>
                      <span className="font-medium text-blue-600">B+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">English</span>
                      <span className="font-medium text-green-600">A</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'attendance':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Attendance Record</h2>
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <span className="font-medium">Overall Attendance: </span>
                  <span className="text-green-600 font-bold">95%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">95</div>
                  <div className="text-sm text-gray-600">Present Days</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-gray-600">Absent Days</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">2</div>
                  <div className="text-sm text-gray-600">Late Days</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">100</div>
                  <div className="text-sm text-gray-600">Total Days</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Attendance</CardTitle>
                <CardDescription>Your attendance for the last few days</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Subjects Attended</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceHistory.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.date}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            record.status === 'Present' 
                              ? 'bg-green-100 text-green-800' 
                              : record.status === 'Late'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {record.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {record.subjects.map((subject, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        );

      case 'homework':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Homework & Assignments</h2>
              <Button variant="outline">Download All</Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Assignments</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="submitted">Submitted</TabsTrigger>
                <TabsTrigger value="graded">Graded</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid gap-4">
                  {homeworkAssignments.map((homework) => (
                    <Card key={homework.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold">{homework.subject}: {homework.title}</h3>
                              <span className={`px-2 py-1 rounded text-xs ${
                                homework.status === 'Pending' 
                                  ? 'bg-orange-100 text-orange-800'
                                  : homework.status === 'Submitted'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {homework.status}
                              </span>
                              {homework.grade && (
                                <span className="px-2 py-1 rounded text-xs bg-purple-100 text-purple-800">
                                  Grade: {homework.grade}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{homework.description}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-gray-500">Due: {homework.dueDate}</span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4" />
                            </Button>
                            {homework.status === 'Pending' && (
                              <Button size="sm">Submit</Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'timetable':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Class Timetable</h2>
              <Button variant="outline">Download PDF</Button>
            </div>

            <Tabs defaultValue="Monday" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="Monday">Monday</TabsTrigger>
                <TabsTrigger value="Tuesday">Tuesday</TabsTrigger>
                <TabsTrigger value="Wednesday">Wednesday</TabsTrigger>
              </TabsList>
              
              {Object.entries(timetable).map(([day, classes]) => (
                <TabsContent key={day} value={day}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{day} Schedule</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {classes.map((classItem, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="text-center">
                                <div className="text-sm font-medium">{classItem.time}</div>
                              </div>
                              <div>
                                <div className="font-medium">{classItem.subject}</div>
                                <div className="text-sm text-gray-600">{classItem.teacher}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">{classItem.room}</div>
                              <div className="text-xs text-gray-500">Room</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Messages</h2>
              <Button>Compose Message</Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Inbox</CardTitle>
                <CardDescription>Messages from teachers and school administration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div key={message.id} className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-50 ${message.unread ? 'bg-blue-50 border-blue-200' : ''}`}>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${message.unread ? 'text-blue-900' : 'text-gray-900'}`}>
                              {message.from}
                            </span>
                            {message.unread && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{message.subject}</p>
                        </div>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{activeSection}</CardTitle>
              <CardDescription>View your {activeSection}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} interface will be implemented here.
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <DashboardLayout
      user={user}
      onLogout={onLogout}
      navigationItems={navigationItems}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      {renderContent()}
    </DashboardLayout>
  );
};
