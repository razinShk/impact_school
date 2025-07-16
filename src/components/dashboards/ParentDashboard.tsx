
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, FileText, MessageSquare, CreditCard, Eye } from 'lucide-react';
import { User } from '@/pages/Index';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatsCard } from '@/components/common/StatsCard';

interface ParentDashboardProps {
  user: User;
  onLogout: () => void;
}

export const ParentDashboard = ({ user, onLogout }: ParentDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedChild, setSelectedChild] = useState('emma');

  const stats = [
    { title: 'Children', value: '2', icon: Users, color: 'bg-blue-500' },
    { title: 'Avg Attendance', value: '92%', icon: Calendar, color: 'bg-green-500' },
    { title: 'Pending Fees', value: '₹5,000', icon: CreditCard, color: 'bg-orange-500' },
    { title: 'Messages', value: '4', icon: MessageSquare, color: 'bg-purple-500' },
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'children', label: 'My Children', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'fees', label: 'Fees', icon: CreditCard },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  // Sample data
  const children = {
    emma: {
      id: 'emma',
      name: 'Emma Johnson',
      class: '10-A',
      rollNo: '025',
      attendance: '95%',
      totalFees: 25000,
      paidFees: 20000,
      pendingFees: 5000,
      grades: {
        Mathematics: 'A',
        Physics: 'A-',
        Chemistry: 'B+',
        English: 'A',
        Biology: 'A-'
      },
      recentActivities: [
        { date: '2024-01-15', activity: 'Math test completed', score: '85/100' },
        { date: '2024-01-14', activity: 'Physics homework submitted' },
        { date: '2024-01-13', activity: 'Chemistry lab attended' },
      ]
    },
    alex: {
      id: 'alex',
      name: 'Alex Johnson',
      class: '8-B',
      rollNo: '018',
      attendance: '90%',
      totalFees: 22000,
      paidFees: 22000,
      pendingFees: 0,
      grades: {
        Mathematics: 'B+',
        Science: 'A',
        English: 'B',
        Social: 'A-',
        Hindi: 'B+'
      },
      recentActivities: [
        { date: '2024-01-15', activity: 'Science project submitted' },
        { date: '2024-01-14', activity: 'Math quiz completed', score: '78/100' },
        { date: '2024-01-12', activity: 'English essay submitted' },
      ]
    }
  };

  const feeDetails = [
    { description: 'Tuition Fee - January', amount: 3000, status: 'Paid', dueDate: '2024-01-05', paidDate: '2024-01-03' },
    { description: 'Tuition Fee - February', amount: 3000, status: 'Due', dueDate: '2024-02-05', paidDate: null },
    { description: 'Laboratory Fee', amount: 1000, status: 'Paid', dueDate: '2024-01-15', paidDate: '2024-01-12' },
    { description: 'Sports Fee', amount: 500, status: 'Due', dueDate: '2024-01-20', paidDate: null },
    { description: 'Library Fee', amount: 300, status: 'Paid', dueDate: '2024-01-10', paidDate: '2024-01-08' },
  ];

  const messages = [
    { 
      id: 1, 
      from: 'Mrs. Wilson (Math Teacher)', 
      subject: 'Emma\'s Math Performance', 
      time: '2 hours ago', 
      unread: true,
      preview: 'Emma has shown excellent improvement in her math skills...'
    },
    { 
      id: 2, 
      from: 'School Admin', 
      subject: 'Parent-Teacher Meeting', 
      time: '1 day ago', 
      unread: false,
      preview: 'Annual parent-teacher meeting scheduled for next Saturday...'
    },
    { 
      id: 3, 
      from: 'Mr. Davis (Physics)', 
      subject: 'Lab Safety Notice', 
      time: '2 days ago', 
      unread: false,
      preview: 'Important safety guidelines for physics laboratory...'
    },
    { 
      id: 4, 
      from: 'School Admin', 
      subject: 'Fee Payment Reminder', 
      time: '3 days ago', 
      unread: false,
      preview: 'Monthly fee payment due on 15th of this month...'
    },
  ];

  const currentChild = children[selectedChild as keyof typeof children];

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
                  <CardTitle>Children's Performance</CardTitle>
                  <CardDescription>Academic overview of your children</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.values(children).map((child) => (
                      <div key={child.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium">{child.name}</p>
                            <p className="text-sm text-gray-600">Class {child.class} • Roll No: {child.rollNo}</p>
                          </div>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            {child.attendance} Attendance
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-gray-600">Recent: </span>
                            <span>{child.recentActivities[0].activity}</span>
                          </div>
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Updates</CardTitle>
                  <CardDescription>Recent messages and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {messages.slice(0, 3).map((message) => (
                      <div key={message.id} className={`p-3 border rounded-lg ${message.unread ? 'bg-blue-50 border-blue-200' : ''}`}>
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-medium text-sm">{message.from}</p>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-900 mb-1">{message.subject}</p>
                        <p className="text-xs text-gray-600">{message.preview}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">View All Messages</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Fee Summary</CardTitle>
                <CardDescription>Payment status for both children</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.values(children).map((child) => (
                    <div key={child.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium">{child.name}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          child.pendingFees > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {child.pendingFees > 0 ? `₹${child.pendingFees} Due` : 'All Paid'}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Fees:</span>
                          <span>₹{child.totalFees}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Paid:</span>
                          <span className="text-green-600">₹{child.paidFees}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pending:</span>
                          <span className={child.pendingFees > 0 ? 'text-red-600' : 'text-green-600'}>
                            ₹{child.pendingFees}
                          </span>
                        </div>
                      </div>
                      {child.pendingFees > 0 && (
                        <Button size="sm" className="w-full mt-3">Pay Now</Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'children':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Children</h2>
              <div className="flex space-x-2">
                <Button 
                  variant={selectedChild === 'emma' ? 'default' : 'outline'}
                  onClick={() => setSelectedChild('emma')}
                >
                  Emma
                </Button>
                <Button 
                  variant={selectedChild === 'alex' ? 'default' : 'outline'}
                  onClick={() => setSelectedChild('alex')}
                >
                  Alex
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{currentChild.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Class:</span>
                      <span className="font-medium">{currentChild.class}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Roll No:</span>
                      <span className="font-medium">{currentChild.rollNo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Attendance:</span>
                      <span className="font-medium text-green-600">{currentChild.attendance}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Grades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(currentChild.grades).map(([subject, grade]) => (
                      <div key={subject} className="flex justify-between items-center">
                        <span className="text-sm">{subject}</span>
                        <span className={`font-medium px-2 py-1 rounded text-xs ${
                          grade.startsWith('A') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {grade}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentChild.recentActivities.map((activity, index) => (
                      <div key={index} className="border-l-2 border-blue-500 pl-3">
                        <div className="text-sm font-medium">{activity.activity}</div>
                        <div className="text-xs text-gray-500">{activity.date}</div>
                        {activity.score && (
                          <div className="text-xs text-green-600 font-medium">{activity.score}</div>
                        )}
                      </div>
                    ))}
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
              <h2 className="text-2xl font-bold">Attendance Tracking</h2>
              <div className="flex space-x-2">
                <Button 
                  variant={selectedChild === 'emma' ? 'default' : 'outline'}
                  onClick={() => setSelectedChild('emma')}
                >
                  Emma
                </Button>
                <Button 
                  variant={selectedChild === 'alex' ? 'default' : 'outline'}
                  onClick={() => setSelectedChild('alex')}
                >
                  Alex
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{currentChild.attendance}</div>
                  <div className="text-sm text-gray-600">Overall Attendance</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">85</div>
                  <div className="text-sm text-gray-600">Present Days</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">5</div>
                  <div className="text-sm text-gray-600">Absent Days</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">2</div>
                  <div className="text-sm text-gray-600">Late Days</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Attendance - {currentChild.name}</CardTitle>
                <CardDescription>Detailed attendance record for the current month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="font-medium p-2">{day}</div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
                    const status = Math.random() > 0.1 ? 'present' : Math.random() > 0.5 ? 'absent' : 'late';
                    return (
                      <div 
                        key={day} 
                        className={`p-2 rounded text-xs ${
                          status === 'present' ? 'bg-green-100 text-green-800' :
                          status === 'late' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'fees':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Fee Management</h2>
              <Button>Pay All Pending</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {Object.values(children).map((child) => (
                <Card key={child.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      {child.name}
                      <span className={`px-2 py-1 rounded text-xs ${
                        child.pendingFees > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {child.pendingFees > 0 ? 'Pending' : 'All Paid'}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Total Annual Fees:</span>
                        <span className="font-medium">₹{child.totalFees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount Paid:</span>
                        <span className="font-medium text-green-600">₹{child.paidFees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pending Amount:</span>
                        <span className={`font-medium ${child.pendingFees > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          ₹{child.pendingFees}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${(child.paidFees / child.totalFees) * 100}%` }}
                        ></div>
                      </div>
                      {child.pendingFees > 0 && (
                        <Button className="w-full">Pay ₹{child.pendingFees}</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Fee Details</CardTitle>
                <CardDescription>Detailed breakdown of all fee payments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Paid Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeDetails.map((fee, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{fee.description}</TableCell>
                        <TableCell>₹{fee.amount}</TableCell>
                        <TableCell>{fee.dueDate}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {fee.status}
                          </span>
                        </TableCell>
                        <TableCell>{fee.paidDate || '-'}</TableCell>
                        <TableCell>
                          {fee.status === 'Due' ? (
                            <Button size="sm">Pay Now</Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Messages</h2>
              <Button>Compose Message</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card>
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
                      Important
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3">
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
                            <div className="flex items-center space-x-2 mb-1">
                              <span className={`font-medium ${message.unread ? 'text-blue-900' : 'text-gray-900'}`}>
                                {message.from}
                              </span>
                              {message.unread && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                            </div>
                            <p className="text-sm font-medium text-gray-900 mb-1">{message.subject}</p>
                            <p className="text-xs text-gray-600">{message.preview}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
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
              <CardDescription>Manage your child's {activeSection}</CardDescription>
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
