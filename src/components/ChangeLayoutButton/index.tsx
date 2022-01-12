import { IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface ChangeLayoutButtonProps {
    layoutType: boolean;
    handleChangeLayputMode: () => void;
}

export function ChangeLayoutButton({ layoutType, handleChangeLayputMode }: ChangeLayoutButtonProps) {
    return (
        <IconButton aria-label="Tema" onClick={handleChangeLayputMode}>
            {layoutType ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
    )
}