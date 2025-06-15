
import { Link, useLocation } from 'react-router-dom';
import { User, Settings, CreditCard, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccountLayoutProps {
  children: React.ReactNode;
}

const AccountLayout = ({ children }: AccountLayoutProps) => {
  const location = useLocation();
  
  const menuItems = [
    {
      path: '/account/profile',
      label: 'Profil',
      icon: User
    },
    {
      path: '/account/settings',
      label: 'Pengaturan',
      icon: Settings
    },
    {
      path: '/account/purchases',
      label: 'Pembelian',
      icon: CreditCard
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/dashboard/student" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Dashboard
            </Link>
          </Button>
          
          <h1 className="text-2xl font-bold mb-6">Akun Saya</h1>
          
          <div className="flex gap-4 mb-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "outline"}
                  asChild
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default AccountLayout;
