import { HeartIcon, MusicIcon, TrashIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AIMusicGeneratorFavorites({ favorites, removeFromFavorites }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeartIcon className="h-5 w-5 text-destructive" />
          Favorite Tracks
        </CardTitle>
        <CardDescription>Your saved favorite AI-generated tracks</CardDescription>
      </CardHeader>
      <CardContent>
        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <HeartIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-medium mb-2">No Favorites Yet</h3>
            <p className="text-muted-foreground">Heart your best generations to save them here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((item) => (
              <div key={item.id} className="group border shadow-md transition-all p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MusicIcon className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium line-clamp-2">{item.prompt}</p>
                  </div>
                  <Button
                    onClick={() => removeFromFavorites(item.id)}
                    size="sm"
                    variant="outline"
                    className="w-7 h-7 p-0"
                  >
                    <TrashIcon className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {new Date(item.timestamp).toLocaleDateString()}
                  </span>
                  {item.isInstrumental && <Badge variant="outline" className="text-[10px]">Instrumental</Badge>}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}