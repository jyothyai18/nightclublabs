import { test, expect } from '@playwright/test'

test('React application loads and counter works', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Get started' })
  ).toBeVisible()

  await expect(
    page.getByRole('button', { name: 'Count is 0' })
  ).toBeVisible()

  await page.getByRole('button', { name: 'Count is 0' }).click()

  await expect(
    page.getByRole('button', { name: 'Count is 1' })
  ).toBeVisible()
})

test('application fits the mobile viewport', async ({ page }, testInfo) => {
  test.skip(
    !testInfo.project.name.includes('mobile'),
    'Mobile viewport test only'
  )

  await page.goto('/')

  const viewport = page.viewportSize()

  expect(viewport).not.toBeNull()
  expect(viewport!.width).toBeLessThanOrEqual(430)

  await expect(
    page.getByRole('heading', { name: 'Get started' })
  ).toBeVisible()
})