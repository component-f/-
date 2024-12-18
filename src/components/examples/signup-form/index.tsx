import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Divider from '@/components/ui/divider'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function SignUpForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Create an account</CardTitle>
        <CardDescription>Enter your email below to create your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="justify-between space-x-2 flex flex-row gap-6">
          <Button startIcon={<FaGithub size={18} />} variant="outlined" className="w-full">
            Github
          </Button>
          <Button startIcon={<FaGoogle size={18} />} variant="outlined" className="w-full">
            Google
          </Button>
        </div>
        <div className="flex flex-row items-center my-4 gap-2">
          <Divider />
          <Label className="text-xs text-muted-foreground">OR CONTINUE WITH</Label>
          <Divider />
        </div>
        <div className="grid gap-4 ">
          <div>
            <Label htmlFor="email" className="font-semibold">
              Email
            </Label>
            <Input type="email" id="email" placeholder="m@example.com" />
          </div>

          <div>
            <Label htmlFor="password" className="font-semibold">
              Password
            </Label>
            <Input type="password" id="password" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="contained" className="w-full">
          Create account
        </Button>
      </CardFooter>
    </Card>
  )
}
