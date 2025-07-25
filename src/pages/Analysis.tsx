import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, BarChart3, Calendar } from 'lucide-react';
import { useFormatters } from '../hooks/useFormatters';

const trendData = [
  { month: 'Jan', spending: 2400, income: 5200 },
  { month: 'Feb', spending: 2800, income: 5200 },
  { month: 'Mar', spending: 2200, income: 5200 },
  { month: 'Apr', spending: 3100, income: 5200 },
  { month: 'May', spending: 2900, income: 5200 },
  { month: 'Jun', spending: 2600, income: 5200 },
];

const dailySpending = [
  { day: 'Mon', amount: 45 },
  { day: 'Tue', amount: 120 },
  { day: 'Wed', amount: 80 },
  { day: 'Thu', amount: 95 },
  { day: 'Fri', amount: 180 },
  { day: 'Sat', amount: 220 },
  { day: 'Sun', amount: 150 },
];

function Analysis() {
  const { formatCurrency } = useFormatters();

  return (
    <div className="p-3 sm:p-4 lg:p-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Analysis</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Detailed insights into your spending patterns</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Average Monthly Spending</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{formatCurrency(2683)}</p>
            </div>
            <div className="bg-blue-100 rounded-full p-2 sm:p-3">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center">
            <span className="text-xs sm:text-sm text-green-600">-8%</span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">vs last quarter</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Highest Spending Day</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">Saturday</p>
            </div>
            <div className="bg-red-100 rounded-full p-2 sm:p-3">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center">
            <span className="text-xs sm:text-sm text-red-600">{formatCurrency(220)}</span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">average</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Spending Trend</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">Decreasing</p>
            </div>
            <div className="bg-green-100 rounded-full p-2 sm:p-3">
              <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center">
            <span className="text-xs sm:text-sm text-green-600">-12%</span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">last 3 months</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Income vs Spending Trend</h3>
          <div className="h-48 sm:h-64 md:h-72 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="spending" stroke="#EF4444" strokeWidth={2} />
            </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Daily Spending Pattern</h3>
          <div className="h-48 sm:h-64 md:h-72 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailySpending}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="amount" stroke="#6366F1" fill="#6366F1" fillOpacity={0.6} />
            </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Key Insights</h3>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-full p-1.5 sm:p-2 flex-shrink-0">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base font-medium text-gray-900">Your spending is trending downward</p>
              <p className="text-xs sm:text-sm text-gray-600">You've reduced spending by 12% over the last 3 months. Keep it up!</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-100 rounded-full p-1.5 sm:p-2 flex-shrink-0">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base font-medium text-gray-900">Weekend spending is higher</p>
              <p className="text-xs sm:text-sm text-gray-600">You spend 40% more on weekends. Consider setting weekend budgets.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-full p-1.5 sm:p-2 flex-shrink-0">
              <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base font-medium text-gray-900">Food category needs attention</p>
              <p className="text-xs sm:text-sm text-gray-600">Food spending is 35% of your budget. Consider meal planning to reduce costs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;