import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Divider from '@/components/ui/divider'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export default function Notifications() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage your notification settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex mt-4">
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="Comments">Comments</Label>
                  <Label htmlFor="Comments" className="text-sm text-muted-foreground pr-10">
                    Receive notifications when someone comments on your documents or mentions you.
                  </Label>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Switch id="Comments-push" checked={true} />
                    <Label htmlFor="Comments-push" className="text-sm text-muted-foreground ml-2">
                      Push
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="Comments-email" checked={true} />
                    <Label htmlFor="Comments-email" className="text-sm text-muted-foreground ml-2">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="Comments-slack" />
                    <Label htmlFor="Comments-slack" className="text-sm text-muted-foreground ml-2">
                      Slack
                    </Label>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="Favorites">Favorites</Label>
                  <Label htmlFor="Favorites" className="text-sm text-muted-foreground pr-10">
                    Receive notifications when there is activity related to your favorited items.
                  </Label>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Switch id="Favorites-push" checked={true} />
                    <Label htmlFor="Favorites-push" className="text-sm text-muted-foreground ml-2">
                      Push
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="Favorites-email" checked={true} />
                    <Label htmlFor="Favorites-email" className="text-sm text-muted-foreground ml-2">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="Favorites-slack" />
                    <Label htmlFor="Favorites-slack" className="text-sm text-muted-foreground ml-2">
                      Slack
                    </Label>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="New-documents">New documents</Label>
                  <Label htmlFor="New-documents" className="text-sm text-muted-foreground pr-10">
                    Receive notifications whenever people on your team create new documents.
                  </Label>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Switch id="New-documents-push" checked={true} />
                    <Label htmlFor="New-documents-push" className="text-sm text-muted-foreground ml-2">
                      Push
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="New-documents-email" checked={true} />
                    <Label htmlFor="New-documents-email" className="text-sm text-muted-foreground ml-2">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="New-documents-slack" />
                    <Label htmlFor="New-documents-slack" className="text-sm text-muted-foreground ml-2">
                      Slack
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
