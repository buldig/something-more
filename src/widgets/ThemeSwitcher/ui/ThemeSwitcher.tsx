import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type FC } from 'react'
import DarkIcon from 'shared/assets/icons/dark.svg'
import LightIcon from 'shared/assets/icons/light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }: ThemeSwitcherProps) => {
  const { theme, switchTheme } = useTheme()
  console.log(theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />)
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={switchTheme}
    >
      {'Switch'}
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
}
