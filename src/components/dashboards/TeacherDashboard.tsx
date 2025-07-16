
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, MessageSquare, FileText, Plus, CheckCircle, XCircle } from 'lucide-react';
import { User } from '@/pages/Index';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatsCard } from '@/components/common/StatsCard';

interface TeacherDashboardProps {
  user: User;
  onLogout: () => void;
}

export const TeacherDashboard = ({ user, onLogout }: TeacherDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const stats = [
    { title: 'My Students', value: '156', icon: Users, color: 'bg-blue-500' },
    { title: 'My Classes', value: '4', icon: Calendar, color: 'bg-green-500' },
    { title: 'Pending Tasks', value: '8', icon: FileText, color: 'bg-orange-500' },
    { title: 'Messages', value: '12', icon: MessageSquare, color: 'bg-purple-500' },
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'students', label: 'My Students', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'homework', label: 'Homework', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  // Sample data
  const myStudents = [
    { id: 1, name: 'John Doe', class: '10-A', rollNo: '001', lastAttendance: 'Present', grade: 'A' },
    { id: 2, name: 'Jane Smith', class: '10-A', rollNo: '002', lastAttendance: 'Present', grade: 'B+' },
    { id: 3, name: 'Mike Johnson', class: '10-A', rollNo: '003', lastAttendance: 'Absent', grade: 'A-' },
    { id: 4, name: 'Sarah Wilson', class: '10-B', rollNo: '004', lastAttendance: 'Present', grade: 'A+' },
    { id: 5, name: 'Tom Brown', class: '10-B', rollNo: '005', lastAttendance: 'Late', grade: 'B' },
  ];

  const attendanceData = [
    { id: 1, name: 'John Doe', rollNo: '001', status: 'present' },
    { id: 2, name: 'Jane Smith', rollNo: '002', status: 'present' },
    { id: 3, name: 'Mike Johnson', rollNo: '003', status: 'absent' },
    { id: 4, name: 'Sarah Wilson', rollNo: '004', status: 'present' },
    { id: 5, name: 'Tom Brown', rollNo: '005', status: 'late' },
  ];

  const homeworkList = [
    { id: 1, title: 'Math Chapter 5 Exercises', class: '10-A', dueDate: '2024-01-20', submitted: 23, total: 25 },
    { id: 2, title: 'Physics Lab Report', class: '10-B', dueDate: '2024-01-22', submitted: 18, total: 20 },
    { id: 3, title: 'Chemistry Formulas', class: '11-A', dueDate: '2024-01-25', submitted: 15, total: 18 },
  ];

  const messages = [
    { id: 1, from: 'John\'s Mother', subject: 'Regarding homework', time: '2 hours ago', unread: true },
    { id: 2, from: 'Admin', subject: 'Staff meeting tomorrow', time: '5 hours ago', unread: false },
    { id: 3, from: 'Jane\'s Father', subject: 'Absence notification', time: '1 day ago', unread: false },
  ];

  const [attendance, setAttendance] = useState(attendanceData);

  const markAttendance = (studentId: number, status: 'present' | 'absent' | 'late') => {
    setAttendance(prev => prev.map(student => 
      student.id === studentId ? { ...student, status } : student
    ));
  };

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
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium">Mathematics - Grade 10A</p>
                        <p className="text-sm text-gray-600">9:00 AM - 10:00 AM</p>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium">Physics - Grade 11B</p>
                        <p className="text-sm text-gray-600">11:00 AM - 12:00 PM</p>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <div>
                        <p className="font-medium">Mathematics - Grade 10B</p>
                        <p className="text-sm text-gray-600">2:00 PM - 3:00 PM</p>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Messages from parents and administration</CardDescription>
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
            </div>
          </div>
        );

      case 'students':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Students</h2>
              <div className="flex space-x-2">
                <Button variant="outline">Export List</Button>
                <Button>Add Student</Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Students</TabsTrigger>
                <TabsTrigger value="10a">Class 10-A</TabsTrigger>
                <TabsTrigger value="10b">Class 10-B</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Class</TableHead>
                          <TableHead>Roll No</TableHead>
                          <TableHead>Last Attendance</TableHead>
                          <TableHead>Current Grade</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {myStudents.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell>{student.class}</TableCell>
                            <TableCell>{student.rollNo}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded text-xs ${
                                student.lastAttendance === 'Present' 
                                  ? 'bg-green-100 text-green-800' 
                                  : student.lastAttendance === 'Late'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {student.lastAttendance}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="font-medium">{student.grade}</span>
                            </TableCell>
                            <TableCell>
                              <Button size="sm" variant="outline">View Profile</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'attendance':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Attendance Management</h2>
              <div className="flex items-center space-x-4">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-48"
                />
                <Button>Save Attendance</Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Mark Attendance - Class 10-A</CardTitle>
                <CardDescription>Date: {selectedDate}</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Roll No</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendance.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.rollNo}</TableCell>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs capitalize ${
                            student.status === 'present' 
                              ? 'bg-green-100 text-green-800' 
                              : student.status === 'late'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {student.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant={student.status === 'present' ? 'default' : 'outline'}
                              onClick={() => markAttendance(student.id, 'present')}
                              className="px-2"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant={student.status === 'late' ? 'default' : 'outline'}
                              onClick={() => markAttendance(student.id, 'late')}
                              className="px-2"
                            >
                              L
                            </Button>
                            <Button
                              size="sm"
                              variant={student.status === 'absent' ? 'default' : 'outline'}
                              onClick={() => markAttendance(student.id, 'absent')}
                              className="px-2"
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
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
              <h2 className="text-2xl font-bold">Homework Management</h2>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Assign New Homework
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {homeworkList.map((homework) => (
                <Card key={homework.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{homework.title}</CardTitle>
                    <CardDescription>Class: {homework.class}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Due Date:</span>
                        <span className="text-sm font-medium">{homework.dueDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Submissions:</span>
                        <span className="text-sm font-medium">{homework.submitted}/{homework.total}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(homework.submitted / homework.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">View Submissions</Button>
                        <Button size="sm" className="flex-1">Grade</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Messages</h2>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Compose Message
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Message Folders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      Inbox ({messages.filter(m => m.unread).length})
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Sent
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Drafts
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Inbox</CardTitle>
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
          </div>
        );

      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{activeSection}</CardTitle>
              <CardDescription>Manage your {activeSection}</CardDescription>
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
