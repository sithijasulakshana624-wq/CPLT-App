import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export default function PrivacyAgreement() {
  const { acceptPrivacy } = useAuth();
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    if (agreed) {
      acceptPrivacy();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Privacy Agreement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-h-96 overflow-y-auto">
            <h3>Terms of Service</h3>
            <p>
              Welcome to CPLT App. By using this application, you agree to our terms and conditions.
            </p>
            <h3>Privacy Policy</h3>
            <p>
              We value your privacy. Your data is securely stored and will never be shared with third parties
              without your explicit consent.
            </p>
            <p>
              This application uses Firebase for authentication and data storage. Please review Firebase's
              privacy policy for more information.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I have read and agree to the terms and privacy policy
            </label>
          </div>

          <Button
            onClick={handleAccept}
            disabled={!agreed}
            className="w-full"
          >
            Accept and Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
