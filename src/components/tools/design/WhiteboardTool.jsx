'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Pen, 
  Eraser, 
  Square, 
  Circle, 
  Minus, 
  Type, 
  Download, 
  Trash2, 
  Undo, 
  Redo,
  Move,
  Palette,
  Settings
} from 'lucide-react';

export default function WhiteboardTool() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(3);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });

  // Predefined colors
  const colors = [
    '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', 
    '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FFC0CB',
    '#A52A2A', '#808080', '#FFFFFF'
  ];

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Save initial state
    saveToHistory();
  }, []);

  // Save canvas state to history
  const saveToHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const imageData = canvas.toDataURL();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(imageData);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  // Get mouse position relative to canvas
  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  // Start drawing
  const startDrawing = (e) => {
    setIsDrawing(true);
    const pos = getMousePos(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  // Draw on canvas
  const draw = (e) => {
    if (!isDrawing) return;

    const pos = getMousePos(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (tool === 'pen') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    } else if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = brushSize * 2;
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
  };

  // Stop drawing
  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveToHistory();
    }
  };

  // Draw shapes
  const drawShape = (e) => {
    if (tool !== 'rectangle' && tool !== 'circle' && tool !== 'line') return;

    const pos = getMousePos(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.globalCompositeOperation = 'source-over';

    if (tool === 'rectangle') {
      const width = 100;
      const height = 60;
      ctx.strokeRect(pos.x - width/2, pos.y - height/2, width, height);
    } else if (tool === 'circle') {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 30, 0, 2 * Math.PI);
      ctx.stroke();
    } else if (tool === 'line') {
      ctx.beginPath();
      ctx.moveTo(pos.x - 50, pos.y);
      ctx.lineTo(pos.x + 50, pos.y);
      ctx.stroke();
    }

    saveToHistory();
  };

  // Undo action
  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      restoreFromHistory(historyIndex - 1);
    }
  };

  // Redo action
  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      restoreFromHistory(historyIndex + 1);
    }
  };

  // Restore canvas from history
  const restoreFromHistory = (index) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
    
    img.src = history[index];
  };

  // Clear canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveToHistory();
  };

  // Download canvas
  const downloadCanvas = (format = 'png') => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `whiteboard.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-cute p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Free Online Whiteboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Draw, sketch, brainstorm and collaborate with our unlimited free whiteboard. 
            No registration required - start creating instantly!
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary">Unlimited Use</Badge>
            <Badge variant="secondary">No Registration</Badge>
            <Badge variant="secondary">Export PNG/JPG</Badge>
            <Badge variant="secondary">Multiple Tools</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Toolbar */}
          <div className="lg:col-span-1">
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Tools & Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Drawing Tools */}
                <div>
                  <h3 className="font-semibold mb-3">Drawing Tools</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={tool === 'pen' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTool('pen')}
                      className="btn-cute"
                    >
                      <Pen className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={tool === 'eraser' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTool('eraser')}
                      className="btn-cute"
                    >
                      <Eraser className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={tool === 'rectangle' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTool('rectangle')}
                      className="btn-cute"
                    >
                      <Square className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={tool === 'circle' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTool('circle')}
                      className="btn-cute"
                    >
                      <Circle className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={tool === 'line' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTool('line')}
                      className="btn-cute"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Brush Size */}
                <div>
                  <h3 className="font-semibold mb-3">Brush Size: {brushSize}px</h3>
                  <Slider
                    value={[brushSize]}
                    onValueChange={(value) => setBrushSize(value[0])}
                    min={1}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>

                <Separator />

                {/* Colors */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Colors
                  </h3>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        className={`w-8 h-8 rounded border-2 transition-all ${
                          color === c ? 'border-primary scale-110' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full h-10 rounded border cursor-pointer"
                  />
                </div>

                <Separator />

                {/* Actions */}
                <div>
                  <h3 className="font-semibold mb-3">Actions</h3>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={undo}
                        disabled={historyIndex <= 0}
                        className="btn-cute flex-1"
                      >
                        <Undo className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={redo}
                        disabled={historyIndex >= history.length - 1}
                        className="btn-cute flex-1"
                      >
                        <Redo className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearCanvas}
                      className="btn-cute w-full"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear All
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => downloadCanvas('png')}
                      className="btn-cute w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PNG
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadCanvas('jpeg')}
                      className="btn-cute w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download JPG
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-3">
            <Card className="card-cute">
              <CardContent className="p-4">
                <div className="bg-white rounded-lg shadow-inner p-4 overflow-auto">
                  <canvas
                    ref={canvasRef}
                    width={canvasSize.width}
                    height={canvasSize.height}
                    className="border border-gray-200 rounded cursor-crosshair max-w-full"
                    onMouseDown={tool === 'pen' || tool === 'eraser' ? startDrawing : drawShape}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  />
                </div>
                <div className="mt-4 text-sm text-muted-foreground text-center">
                  Canvas Size: {canvasSize.width} × {canvasSize.height} pixels
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Whiteboard Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-cute">
              <CardContent className="p-6 text-center">
                <Pen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Drawing Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Pen, eraser, shapes, and lines with customizable brush sizes
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute">
              <CardContent className="p-6 text-center">
                <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Color Palette</h3>
                <p className="text-sm text-muted-foreground">
                  Predefined colors plus custom color picker for unlimited options
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute">
              <CardContent className="p-6 text-center">
                <Download className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Export Options</h3>
                <p className="text-sm text-muted-foreground">
                  Download your creations as PNG or JPG files
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute">
              <CardContent className="p-6 text-center">
                <Undo className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Undo/Redo</h3>
                <p className="text-sm text-muted-foreground">
                  Full history support with unlimited undo and redo actions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-cute">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Brainstorming</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize ideas, create mind maps, and organize thoughts with unlimited space
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Explain concepts, solve problems, and create visual learning materials
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Design Sketching</h3>
                <p className="text-sm text-muted-foreground">
                  Quick wireframes, UI mockups, and creative sketches for any project
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}