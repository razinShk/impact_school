
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, MessageSquare, FileText, Plus, Search, Edit, Trash2 } from 'lucide-react';
import { User } from '@/pages/Index';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatsCard } from '@/components/common/StatsCard';

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

export const AdminDashboard = ({ user, onLogout }: AdminDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { title: 'Total Students', value: '1,247', icon: Users, color: 'bg-blue-500' },
    { title: 'Total Teachers', value: '78', icon: Users, color: 'bg-green-500' },
    { title: 'Classes', value: '24', icon: Calendar, color: 'bg-purple-500' },
    { title: 'Active Notices', value: '12', icon: MessageSquare, color: 'bg-orange-500' },
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: Users },
    { id: 'classes', label: 'Classes', icon: Calendar },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'notices', label: 'Notices', icon: MessageSquare },
  ];

  // Sample data
  const students = [
    { id: 1, name: 'John Doe', class: '10-A', rollNo: '001', attendance: '95%', fees: 'Paid' },
    { id: 2, name: 'Jane Smith', class: '10-B', rollNo: '002', attendance: '92%', fees: 'Due' },
    { id: 3, name: 'Mike Johnson', class: '9-A', rollNo: '003', attendance: '88%', fees: 'Paid' },
    { id: 4, name: 'Sarah Wilson', class: '11-A', rollNo: '004', attendance: '97%', fees: 'Paid' },
    { id: 5, name: 'Tom Brown', class: '10-A', rollNo: '005', attendance: '90%', fees: 'Due' },
  ];

  const teachers = [
    { id: 1, name: 'Dr. Sarah Wilson', subject: 'Mathematics', classes: '10-A, 11-B', experience: '8 years' },
    { id: 2, name: 'Mr. John Davis', subject: 'Physics', classes: '11-A, 12-A', experience: '12 years' },
    { id: 3, name: 'Ms. Emily Johnson', subject: 'English', classes: '9-A, 10-B', experience: '6 years' },
    { id: 4, name: 'Mr. Robert Taylor', subject: 'Chemistry', classes: '11-B, 12-B', experience: '10 years' },
  ];

  const classes = [
    { id: 1, name: '10-A', students: 45, classTeacher: 'Dr. Sarah Wilson', subjects: 8 },
    { id: 2, name: '10-B', students: 42, classTeacher: 'Ms. Emily Johnson', subjects: 8 },
    { id: 3, name: '11-A', students: 38, classTeacher: 'Mr. John Davis', subjects: 6 },
    { id: 4, name: '11-B', students: 40, classTeacher: 'Mr. Robert Taylor', subjects: 6 },
  ];

  const notices = [
    { id: 1, title: 'Holiday Notice', date: '2024-01-15', status: 'Active', views: 245 },
    { id: 2, title: 'Exam Schedule', date: '2024-01-10', status: 'Active', views: 189 },
    { id: 3, title: 'Parent Meeting', date: '2024-01-05', status: 'Expired', views: 156 },
    { id: 4, title: 'Fee Payment Reminder', date: '2024-01-12', status: 'Active', views: 234 },
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
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest updates from your school</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">New student enrollment: John Doe</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Attendance marked for Class 10-A</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">New notice posted: Holiday announcement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Fee payment received from Jane Smith</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add Student
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add Teacher
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Create Notice
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      View Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'students':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Student Management</h2>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New Student
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Roll Number</TableHead>
                      <TableHead>Attendance</TableHead>
                      <TableHead>Fees Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.class}</TableCell>
                        <TableCell>{student.rollNo}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            parseFloat(student.attendance) >= 95 
                              ? 'bg-green-100 text-green-800' 
                              : parseFloat(student.attendance) >= 90
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {student.attendance}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            student.fees === 'Paid' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {student.fees}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="w-4 h-4" />
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

      case 'teachers':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Teacher Management</h2>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New Teacher
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Classes</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>{teacher.subject}</TableCell>
                        <TableCell>{teacher.classes}</TableCell>
                        <TableCell>{teacher.experience}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="w-4 h-4" />
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

      case 'classes':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Class Management</h2>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create New Class
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>Class {classItem.name}</span>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Students:</strong> {classItem.students}</p>
                      <p className="text-sm"><strong>Class Teacher:</strong> {classItem.classTeacher}</p>
                      <p className="text-sm"><strong>Subjects:</strong> {classItem.subjects}</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'notices':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Notice Management</h2>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create Notice
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {notices.map((notice) => (
                      <TableRow key={notice.id}>
                        <TableCell className="font-medium">{notice.title}</TableCell>
                        <TableCell>{notice.date}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            notice.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {notice.status}
                          </span>
                        </TableCell>
                        <TableCell>{notice.views}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="w-4 h-4" />
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

      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{activeSection}</CardTitle>
              <CardDescription>Manage your school's {activeSection}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} management interface will be implemented here.
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
