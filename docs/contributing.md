---
id: contributing
title: Writing Docs
---

Możesz pisać zawartość przy użyciu składni [Markdown GitHub](https://github.github.com/gfm/).

## Składnia  Markdown

Służy jako przykładowa strona podczas stylizacji witryn opartych o Docusaurus.

## Nagłówki

# H1 - Stwórz jak najlepszą dokumentację

## H2 - Stwórz jak najlepszą dokumentację

### H3 - Stwórz jak najlepszą dokumentację

#### H4 - Stwórz jak najlepszą dokumentację

##### H5 - Stwórz jak najlepszą dokumentację

###### H6 - Stwórz jak najlepszą dokumentację

---

## Wyszczególnienia

Wyszczególnienia kursywą za pomocą *gwiazdek* or _podkreślników_.

Pogrubienia za pomocą **podwójnej gwiazdki** or __dwóch podkreślników__.

Połączone wyszczególnienie **podwójna gwiazdka oraz __dwa podkreślniki__**.

Przekreślenie za pomoca podwójnej tyldy. ~~Scratch this.~~

---

## Listy

1. Pierwsza uporządkowana pozycja listy
1. Kolejna pozycja
   - Podlista nieuporządkowana.
1. Rzeczywiste liczby nie mają znaczenia, tylko że to liczba
   1. Podlista uporządkowana
1. I kolejna pozycja.

* Lista nieuporządkowana może zawierać gwiazdki

- Albo minusy

+ Lub plusy
---

## Linki

[Jestem linkiem w tekście] (https://www.google.com/)

[Jestem wbudowanym linkiem z tytułem] (https://www.google.com/ "Strona główna Google")

[Jestem odnośnikiem w stylu referencyjnym] [tekst referencyjny bez rozróżniania dowolnej wielkości liter]

[Możesz użyć numerów dla definicji odsyłaczy w stylu odniesienia] [1]

Lub pozostaw to pole puste i użyj [samego tekstu linku].

Adresy URL i adresy URL w nawiasach ostrych zostaną automatycznie zamienione na linki. http://www.example.com/ lub <http://www.example.com/> i czasami example.com (ale nie na przykład w GitHub).

Tekst pokazujący, że linki do odnośników można znaleźć później.

[dowolny tekst referencyjny bez rozróżniania wielkości liter]: https://www.mozilla.org/
[1]: http://slashdot.org/
[sam tekst linku]: http://www.reddit.com/

---

## Zdjęcia

Oto nasze logo (najedź kursorem, aby zobaczyć tekst tytułowy):

Styl inline:! [Tekst alternatywny] (https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png „Tekst tytułu logo 1”)

Styl odniesienia:! [Tekst alternatywny] [logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png „Tekst tytułu logo 2”

Obrazy z dowolnego folderu mogą być używane, podając ścieżkę do pliku. Ścieżka powinna być podana względem pliku markdown.

! [img] (../ static / img / logo.svg)

---

## Kod

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
Nie wskazano języka, więc nie ma podświetlania składni.
Ale dorzućmy <b> tag </b>.
```

```js {2}
funkcja podkreślMnie() {
  console.log('This line can be highlighted!');
}
```

---

## Tabele
Do wyrównania kolumn można użyć dwukropków.


| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

Każda komórka nagłówka musi zawierać co najmniej 3 myślniki. Zewnętrzne rury (|) są opcjonalne i nie musisz ładnie ustawiać surowej linii Markdown. Możesz także użyć wbudowanej usługi Markdown.

| Markdown | Mniej | Ladny |
| -------- | --------- | ---------- |
| _Nadal_ | `renderuje` | ** ładnie ** |
| 1 | 2 | 3 |

---

## Cytaty blokowe

> Cytaty blokowe są bardzo przydatne w e-mailach do emulacji tekstu odpowiedzi. Ta linia jest częścią tego samego cytatu.

Przerwa w cytowaniu.


> To jest bardzo długa linijka, która będzie nadal poprawnie cytowana po zakończeniu. O rany, piszmy dalej, aby upewnić się, że to wystarczająco długo, aby wszyscy mogli się zapakować. Och, możesz _wstawić_ ** Markdown ** w cytat blokowy.

---

## Wbudowany kod HTML

<dl>
  <dt> Lista definicji </dt>
  <dd> Czy jest czymś, czego ludzie czasami używają. </dd>

  <dt> Markdown w HTML </dt>
  <dd> * Nie * działa ** bardzo ** dobrze. Użyj <em> tagów </em> HTML. </dd>
</dl>

---

## Podziały wierszy

Oto kwestia, od której możemy zacząć.

Ta linia jest oddzielona od powyższej dwoma znakami nowej linii, więc będzie to _oddzielny akapit_.

Ta linia jest również oddzielnym akapitem, ale ... Ta linia jest oddzielona tylko pojedynczym znakiem nowej linii, więc jest to osobna linia w _ tym samym akapicie_.

---

## Upomnienia

:::Uwaga

To jest Notatka / Uwaga

:::

:::Podpowiedź

To jest podpowiedź

:::

:::Kluczowa Informacja

To jest niezwykla ważne

:::

:::Zalecenia

Zaleca się

:::

:::Ostrzeżenie!!!

To jest ostrzeżenie

:::
