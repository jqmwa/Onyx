import { useState } from 'react';

// Components
import {
  Button,
  Toggle,
  Checkbox,
  Select,
  TextInput,
  Dropdown,
  Slider,
  ProgressBar,
  Healthbar,
  Scrollbar,
  MenuItem,
  MenuBar,
  AudioPlayer,
  Tag,
  H1, H2, H3, H4, Body, BodySmall, BodyBlock, Caption, List, ListItem,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Pagination,
  Calendar,
  LabelControlProgress, LabelControlToggle,
  Crosshairs,
  Cursor,
  Minimap,
  PlayerList, PlayerItem,
  AmmoCounter, Grenades,
  MediaPlaceholder,
  DirectionButton,
} from '../components';

// Icons
import {
  KeyW, KeyA, KeyS, KeyD, KeySpace, KeyShift, KeyEscape,
  Mouse, MouseLeft, MouseRight, MouseScroll,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  Check, Close, Plus, Minus, Search, Settings, User,
  Play, Pause, VolumeHigh,
  Spinner, DotsLoader, PulseLoader, ProgressRing, BarsLoader, LoadingCircle, LoadingSquare, LoadingWave, Hourglass,
  Discord, Twitter, YouTube, GitHub, Steam, Telegram,
} from '../icons';

export default function App() {
  const [toggleOn, setToggleOn] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [selectChecked, setSelectChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [dropdownValue, setDropdownValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [labelToggle, setLabelToggle] = useState(false);

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="showcase">
      <header className="showcase__header">
        <h1 className="showcase__title">Autocrat Game UI</h1>
        <p className="showcase__subtitle">A comprehensive design system for game interfaces</p>
        <div className="showcase__header-actions">
          <a href="/game.html" className="showcase__game-link">
            🎮 Play Autocrat Game
          </a>
        </div>
      </header>

      {/* Icons Section */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Icons</h2>
        <p className="showcase__section-desc">PC keyboard, mouse, UI, loading, and social icons</p>

        <div className="showcase__grid showcase__grid--2">
          <div className="showcase__card">
            <h3 className="showcase__card-title">PC Keys</h3>
            <div className="showcase__icon-grid">
              <div className="showcase__icon-item"><KeyW size="lg" /><span className="showcase__icon-label">W</span></div>
              <div className="showcase__icon-item"><KeyA size="lg" /><span className="showcase__icon-label">A</span></div>
              <div className="showcase__icon-item"><KeyS size="lg" /><span className="showcase__icon-label">S</span></div>
              <div className="showcase__icon-item"><KeyD size="lg" /><span className="showcase__icon-label">D</span></div>
              <div className="showcase__icon-item"><KeySpace size="lg" /><span className="showcase__icon-label">Space</span></div>
              <div className="showcase__icon-item"><KeyShift size="lg" /><span className="showcase__icon-label">Shift</span></div>
              <div className="showcase__icon-item"><KeyEscape size="lg" /><span className="showcase__icon-label">Esc</span></div>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Mouse</h3>
            <div className="showcase__icon-grid">
              <div className="showcase__icon-item"><Mouse size="lg" /><span className="showcase__icon-label">Mouse</span></div>
              <div className="showcase__icon-item"><MouseLeft size="lg" /><span className="showcase__icon-label">Left</span></div>
              <div className="showcase__icon-item"><MouseRight size="lg" /><span className="showcase__icon-label">Right</span></div>
              <div className="showcase__icon-item"><MouseScroll size="lg" /><span className="showcase__icon-label">Scroll</span></div>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">UI Icons</h3>
            <div className="showcase__icon-grid">
              <div className="showcase__icon-item"><ChevronUp size="md" /><span className="showcase__icon-label">Up</span></div>
              <div className="showcase__icon-item"><ChevronDown size="md" /><span className="showcase__icon-label">Down</span></div>
              <div className="showcase__icon-item"><ChevronLeft size="md" /><span className="showcase__icon-label">Left</span></div>
              <div className="showcase__icon-item"><ChevronRight size="md" /><span className="showcase__icon-label">Right</span></div>
              <div className="showcase__icon-item"><Check size="md" /><span className="showcase__icon-label">Check</span></div>
              <div className="showcase__icon-item"><Close size="md" /><span className="showcase__icon-label">Close</span></div>
              <div className="showcase__icon-item"><Plus size="md" /><span className="showcase__icon-label">Plus</span></div>
              <div className="showcase__icon-item"><Minus size="md" /><span className="showcase__icon-label">Minus</span></div>
              <div className="showcase__icon-item"><Search size="md" /><span className="showcase__icon-label">Search</span></div>
              <div className="showcase__icon-item"><Settings size="md" /><span className="showcase__icon-label">Settings</span></div>
              <div className="showcase__icon-item"><User size="md" /><span className="showcase__icon-label">User</span></div>
              <div className="showcase__icon-item"><Play size="md" /><span className="showcase__icon-label">Play</span></div>
              <div className="showcase__icon-item"><Pause size="md" /><span className="showcase__icon-label">Pause</span></div>
              <div className="showcase__icon-item"><VolumeHigh size="md" /><span className="showcase__icon-label">Volume</span></div>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Loading</h3>
            <div className="showcase__row">
              <Spinner size="lg" />
              <DotsLoader size="lg" />
              <PulseLoader size="lg" />
              <ProgressRing size="lg" progress={75} />
              <BarsLoader size="lg" />
              <LoadingCircle size="lg" />
              <LoadingSquare size="lg" />
              <LoadingWave size="lg" />
              <Hourglass size="lg" />
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Social</h3>
            <div className="showcase__icon-grid">
              <div className="showcase__icon-item"><Discord size="lg" /><span className="showcase__icon-label">Discord</span></div>
              <div className="showcase__icon-item"><Telegram size="lg" /><span className="showcase__icon-label">Telegram</span></div>
              <div className="showcase__icon-item"><Twitter size="lg" /><span className="showcase__icon-label">Twitter</span></div>
              <div className="showcase__icon-item"><YouTube size="lg" /><span className="showcase__icon-label">YouTube</span></div>
              <div className="showcase__icon-item"><GitHub size="lg" /><span className="showcase__icon-label">GitHub</span></div>
              <div className="showcase__icon-item"><Steam size="lg" /><span className="showcase__icon-label">Steam</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Buttons</h2>
        <p className="showcase__section-desc">Primary, Outline, Prompt, and Direction variants with all states</p>

        <div className="showcase__grid showcase__grid--3">
          <div className="showcase__card">
            <h3 className="showcase__card-title">Primary</h3>
            <div className="showcase__col">
              <Button variant="primary">Default</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Outline</h3>
            <div className="showcase__col">
              <Button variant="outline">Default</Button>
              <Button variant="outline" disabled>Disabled</Button>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Prompt</h3>
            <div className="showcase__col">
              <Button variant="prompt" icon={<KeyA size="md" />}>Press A</Button>
              <Button variant="prompt" icon={<KeyA size="md" />} disabled>Disabled</Button>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Direction Buttons</h3>
            <div className="showcase__col">
              <div className="showcase__row">
                <DirectionButton direction="up" />
                <DirectionButton direction="down" />
                <DirectionButton direction="left" />
                <DirectionButton direction="right" />
              </div>
              <div className="showcase__row">
                <DirectionButton direction="up" state="hovered" />
                <DirectionButton direction="down" state="hovered" />
                <DirectionButton direction="left" state="hovered" />
                <DirectionButton direction="right" state="hovered" />
              </div>
              <div className="showcase__row">
                <DirectionButton direction="up" state="disabled" />
                <DirectionButton direction="down" state="disabled" />
                <DirectionButton direction="left" state="disabled" />
                <DirectionButton direction="right" state="disabled" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Controls */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Form Controls</h2>
        <p className="showcase__section-desc">Toggle, Checkbox, Select, TextInput, and Dropdown</p>

        <div className="showcase__grid showcase__grid--3">
          <div className="showcase__card">
            <h3 className="showcase__card-title">Toggle</h3>
            <div className="showcase__row">
              <Toggle checked={toggleOn} onCheckedChange={setToggleOn} />
              <Toggle checked={true} disabled />
              <Toggle checked={false} disabled />
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Checkbox</h3>
            <div className="showcase__row">
              <Checkbox checked={checkboxChecked} onCheckedChange={setCheckboxChecked} />
              <Checkbox checked={true} disabled />
              <Checkbox checked={false} disabled />
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Select (Radio)</h3>
            <div className="showcase__row">
              <Select checked={selectChecked} onCheckedChange={setSelectChecked} />
              <Select checked={true} disabled />
              <Select checked={false} disabled />
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Text Input</h3>
            <div className="showcase__col">
              <TextInput placeholder="Default" />
              <TextInput placeholder="Error" error />
              <TextInput placeholder="Disabled" disabled />
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Dropdown</h3>
            <div className="showcase__col">
              <Dropdown 
                options={dropdownOptions} 
                value={dropdownValue} 
                onChange={setDropdownValue}
                placeholder="Select option..."
              />
              <Dropdown options={dropdownOptions} disabled placeholder="Disabled" />
            </div>
          </div>
        </div>
      </section>

      {/* Progress Components */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Progress Components</h2>
        <p className="showcase__section-desc">Slider, ProgressBar, and Healthbar</p>

        <div className="showcase__grid showcase__grid--2">
          <div className="showcase__card">
            <h3 className="showcase__card-title">Slider</h3>
            <div className="showcase__col">
              <Slider value={sliderValue} onChange={setSliderValue} />
              <span>Value: {sliderValue}</span>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Progress Bar</h3>
            <div className="showcase__col">
              <ProgressBar value={25} showLabel />
              <ProgressBar value={50} showLabel />
              <ProgressBar value={75} showLabel />
              <ProgressBar value={100} showLabel />
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Healthbar</h3>
            <div className="showcase__col">
              <Healthbar value={100} showValue />
              <Healthbar value={45} showValue />
              <Healthbar value={15} showValue />
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Scrollbar</h3>
            <div className="showcase__row">
              <Scrollbar orientation="horizontal" value={30} thumbSize={25} />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Navigation</h2>
        <p className="showcase__section-desc">MenuBar, MenuItem, and Pagination</p>

        <div className="showcase__grid showcase__grid--2">
          <div className="showcase__card">
            <h3 className="showcase__card-title">Menu Bar</h3>
            <MenuBar>
              <MenuItem active>Home</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem disabled>Locked</MenuItem>
            </MenuBar>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Pagination</h3>
            <Pagination 
              totalPages={5} 
              currentPage={currentPage} 
              onPageChange={setCurrentPage} 
            />
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Typography</h2>
        <p className="showcase__section-desc">Heading, body, list, and block text styles</p>

        <div className="showcase__grid showcase__grid--2">
          <div className="showcase__card">
            <h3 className="showcase__card-title">Headings</h3>
            <div className="showcase__col">
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <H4>Heading 4</H4>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Body Text</h3>
            <div className="showcase__col">
              <Body>Body text - The quick brown fox jumps over the lazy dog.</Body>
              <BodySmall>Body small - The quick brown fox jumps over the lazy dog.</BodySmall>
              <Caption>Caption text</Caption>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Block Text</h3>
            <BodyBlock>
              <p>This is block text with paragraph spacing. It's useful for longer content blocks.</p>
              <p>Each paragraph has proper spacing between them for better readability.</p>
            </BodyBlock>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Lists</h3>
            <div className="showcase__col">
              <List listStyle="bulleted">
                <ListItem>Bullet item one</ListItem>
                <ListItem>Bullet item two</ListItem>
                <ListItem>Bullet item three</ListItem>
              </List>
              <List listStyle="numbered">
                <ListItem>Numbered item one</ListItem>
                <ListItem>Numbered item two</ListItem>
                <ListItem>Numbered item three</ListItem>
              </List>
            </div>
          </div>
        </div>
      </section>

      {/* Media Placeholders */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Media Placeholders</h2>
        <p className="showcase__section-desc">Placeholders for images, videos, audio, and documents</p>

        <div className="showcase__grid showcase__grid--4">
          <div className="showcase__card">
            <h3 className="showcase__card-title">Image</h3>
            <MediaPlaceholder type="image" aspectRatio={16/9} label="Image Placeholder" />
          </div>
          <div className="showcase__card">
            <h3 className="showcase__card-title">Video</h3>
            <MediaPlaceholder type="video" aspectRatio={16/9} label="Video Placeholder" />
          </div>
          <div className="showcase__card">
            <h3 className="showcase__card-title">Audio</h3>
            <MediaPlaceholder type="audio" aspectRatio={2/1} label="Audio Placeholder" />
          </div>
          <div className="showcase__card">
            <h3 className="showcase__card-title">Document</h3>
            <MediaPlaceholder type="document" aspectRatio={3/4} label="Document Placeholder" />
          </div>
        </div>
      </section>

      {/* Data Display */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Data Display</h2>
        <p className="showcase__section-desc">Table, Tags, and Calendar</p>

        <div className="showcase__grid showcase__grid--2">
          <div className="showcase__card">
            <h3 className="showcase__card-title">Table</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead sortable sortDirection="desc">Name</TableHead>
                  <TableHead sortable>Score</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Player 1</TableCell>
                  <TableCell>1250</TableCell>
                  <TableCell>Online</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Player 2</TableCell>
                  <TableCell>980</TableCell>
                  <TableCell>Away</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Tags</h3>
            <div className="showcase__row">
              <Tag variant="square">Square</Tag>
              <Tag variant="rounded">Rounded</Tag>
              <Tag variant="outlined">Outlined</Tag>
              <Tag variant="squareWithX" onRemove={() => {}}>Removable</Tag>
            </div>
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Calendar (Light)</h3>
            <Calendar theme="light" selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>

          <div className="showcase__card" style={{ background: '#1a1a1a' }}>
            <h3 className="showcase__card-title" style={{ color: '#a0a0a0' }}>Calendar (Dark)</h3>
            <Calendar theme="dark" selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>
        </div>
      </section>

      {/* Media & Feedback */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Media & Feedback</h2>
        <p className="showcase__section-desc">AudioPlayer and LabelControls</p>

        <div className="showcase__grid showcase__grid--2">
          <div className="showcase__card">
            <h3 className="showcase__card-title">Audio Player</h3>
            <AudioPlayer state="play" volume="loud" progress={35} />
          </div>

          <div className="showcase__card">
            <h3 className="showcase__card-title">Label Controls</h3>
            <div className="showcase__col">
              <LabelControlProgress label="Volume" value={75} state="focused" />
              <LabelControlToggle 
                label="Enable Notifications" 
                checked={labelToggle} 
                onCheckedChange={setLabelToggle}
                state="unfocused"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game UI */}
      <section className="showcase__section">
        <h2 className="showcase__section-title">Game UI Components</h2>
        <p className="showcase__section-desc">Crosshairs, Cursors, Minimap, and HUD elements</p>

        <div className="showcase__dark">
          <div className="showcase__grid showcase__grid--3">
            <div>
              <h3 className="showcase__card-title">Crosshairs</h3>
              <div className="showcase__row" style={{ color: 'white' }}>
                <Crosshairs variant="style1" size={60} />
                <Crosshairs variant="style2" size={60} />
                <Crosshairs variant="style3" size={60} />
                <Crosshairs variant="style4" size={60} />
                <Crosshairs variant="style5" size={60} />
              </div>
            </div>

            <div>
              <h3 className="showcase__card-title">Cursors</h3>
              <div className="showcase__row" style={{ color: 'white' }}>
                <Cursor type="pointer" />
                <Cursor type="handOpen" />
                <Cursor type="handPointing" />
                <Cursor type="text" />
              </div>
            </div>

            <div>
              <h3 className="showcase__card-title">Ammo & Grenades</h3>
              <div className="showcase__col">
                <AmmoCounter current={27} max={50} />
                <Grenades count={3} />
              </div>
            </div>

            <div>
              <h3 className="showcase__card-title">Minimap (Dark)</h3>
              <Minimap theme="dark" size={150} />
            </div>

            <div>
              <h3 className="showcase__card-title">Minimap (Light)</h3>
              <Minimap theme="light" size={150} />
            </div>

            <div>
              <h3 className="showcase__card-title">Player List</h3>
              <PlayerList>
                <PlayerItem name="Player123" state="speaking" />
                <PlayerItem name="GamerXYZ" state="idle" />
                <PlayerItem name="ProPlayer" state="muted" />
              </PlayerList>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
