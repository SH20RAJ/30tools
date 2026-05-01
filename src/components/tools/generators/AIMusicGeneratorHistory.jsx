import { History, TrashIcon, MusicIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AIMusicGeneratorHistory({ history, clearHistory, loadFromHistory }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Generation History
            </CardTitle>
            <CardDescription>View and reload your previously generated tracks</CardDescription>
          </div>
          {history.length > 0 && (
            <Button onClick={clearHistory} variant="outline" size="sm" className="gap-2">
              <TrashIcon className="h-4 w-4" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {history.length === 0 ? (
          <div className="text-center py-12">
            <History className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-medium mb-2">No History Yet</h3>
            <p className="text-muted-foreground">Your generated tracks will appear here for easy access</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="group border shadow-md transition-all cursor-pointer p-3"
                onClick={() => loadFromHistory(item)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MusicIcon className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm font-medium line-clamp-2">{item.prompt}</p>
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