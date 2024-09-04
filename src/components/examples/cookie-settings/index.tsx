import Button from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Switch from '@/components/ui/switch'

export default function CookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-4">
          <div className="flex flex-row justify-between space-x-2">
            <div className="grid gap-2">
              <Label htmlFor="strictly-necessary">Strictly Necessary</Label>
              <Label htmlFor="strictly-necessary" className="text-sm text-muted-foreground">
                These cookies are essential in order to use the website and use its features.
              </Label>
            </div>
            <Switch id="strictly-necessary" checked={true} />
          </div>
          <div className="flex flex-row justify-between space-x-2">
            <div className="grid gap-2">
              <Label htmlFor="functional-cookies">Functional Cookies</Label>
              <Label htmlFor="functional-cookies" className="text-sm text-muted-foreground">
                These cookies allow the website to provide personalized functionality.
              </Label>
            </div>
            <Switch id="functional-cookies" />
          </div>
          <div className="flex flex-row justify-between space-x-2">
            <div className="grid gap-2">
              <Label htmlFor="performance-cookies">Performance Cookies</Label>
              <Label htmlFor="performance-cookies" className="text-sm text-muted-foreground">
                These cookies help to improve the performance of the website.
              </Label>
            </div>
            <Switch id="performance-cookies" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outlined" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
